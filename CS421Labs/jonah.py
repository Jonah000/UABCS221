import re
user_input = input("Please enter your name: ")
uppercase_input = user_input.upper()
print("Uppercase version:", uppercase_input)
filename = re.sub(r'[^a-zA-Z0-9]', '_', uppercase_input) + ".txt"
with open(filename, "w") as file:
    file.write(uppercase_input)