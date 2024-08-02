from flask import render_template, redirect, url_for, flash, request
from flask_login import current_user, login_user, logout_user, login_required
from werkzeug.urls import url_parse
from . import db
from .models import User, Profile, Follow, Post, Like, Comment
from .forms import SignUpForm, SignInForm

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = SignUpForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        profile = Profile(user_id=user.id)
        db.session.add(profile)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('signin'))
    return render_template('signup.html', title='Sign Up', form=form)

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = SignInForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('signin'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(next_page)
    return render_template('signin.html', title='Sign In', form=form)

@app.route('/profile/<username>', methods=['GET', 'POST'])
@login_required
def profile(username):
    user = User.query.filter_by(username=username).first_or_404()
    if user != current_user:
        abort(403)
    form = ProfileForm()
    if form.validate_on_submit():
        user.profile.bio = form.bio.data
        if form.profile_pic.data:
            filename = secure_filename(form.profile_pic.data.filename)
            form.profile_pic.data.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            user.profile.profile_pic = filename
        db.session.commit()
        flash('Your profile has been updated.')
        return redirect(url_for('profile', username=user.username))
    elif request.method == 'GET':
        form.bio.data = user.profile.bio
    return render_template('profile.html', user=user, form=form)

@app.route('/search', methods=['GET', 'POST'])
@login_required
def search():
    if request.method == 'POST':
        query = request.form.get('query')
        users = User.query.filter(User.username.contains(query)).all()
        return render_template('search.html', users=users, query=query)
    return render_template('search.html')

@app.route('/follow/<username>')
@login_required
def follow(username):
    user = User.query.filter_by(username=username).first()
    if user is None:
        flash('User {} not found.'.format(username))
        return redirect(url_for('index'))
    if user == current_user:
        flash('You cannot follow yourself!')
        return redirect(url_for('profile', username=username))
    current_user.follow(user)
    db.session.commit()
    flash('You are now following {}!'.format(username))
    return redirect(url_for('profile', username=username))

@app.route('/unfollow/<username>')
@login_required
def unfollow(username):
    user = User.query.filter_by(username=username).first()
    if user is None:
        flash('User {} not found.'.format(username))
        return redirect(url_for('index'))
    if user == current_user:
        flash('You cannot unfollow yourself!')
        return redirect(url_for('profile', username=username))
    current_user.unfollow(user)
    db.session.commit()
    flash('You have unfollowed {}.'.format(username))
    return redirect(url_for('profile', username=username))

@app.route('/post', methods=['POST'])
@login_required
def post():
    if request.method == 'POST':
        body = request.form.get('body')
        image = request.files.get('image')
        video = request.files.get('video')
        post = Post(body=body, author=current_user)
        if image:
            image_filename = secure_filename(image.filename)
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], image_filename))
            post.image = image_filename
        if video:
            video_filename = secure_filename(video.filename)
            video.save(os.path.join(app.config['UPLOAD_FOLDER'], video_filename))
            post.video = video_filename
        db.session.add(post)
        db.session.commit()
        flash('Your post is now live!')
        return redirect(url_for('index'))

@app.route('/like/<int:post_id>', methods=['POST'])
@login_required
def like(post_id):
    post = Post.query.get_or_404(post_id)
    if post is None:
        flash('Post not found.')
        return redirect(url_for('index'))
    like = Like(user_id=current_user.id, post_id=post.id)
    db.session.add(like)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/comment/<int:post_id>', methods=['POST'])
@login_required
def comment(post_id):
    post = Post.query.get_or_404(post_id)
    if post is None:
        flash('Post not found.')
        return redirect(url_for('index'))
    body = request.form.get('body')
    comment = Comment(body=body, user_id=current_user.id, post_id=post.id)
    db.session.add(comment)
    db.session.commit()
    return redirect(url_for('index'))