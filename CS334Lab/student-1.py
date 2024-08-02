#I, Jonah Higgins, worked alone
# IERG3310 Project
import socket
import random
import time

server_ip = "192.168.1.151"
server_port = 3310

s1 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s1.connect((server_ip, server_port))
print("Connected to server: " + server_ip + " at port: " + str(server_port))

student_id = input("Enter student ID: ")
s1.send(student_id.encode())
print("Student ID sent: " + student_id)

s1port = s1.recv(1024)
s1port = str(s1port, "UTF-8")
time.sleep(1)
print("Creating new socket s2: ")
newport = int(s1port)

s2 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s2.bind(("", newport))
s2.listen(1)
s2, address = s2.accept()
ports_to_send = s2.recv(1024)
ports_to_send = str(ports_to_send, "UTF-8")
print(ports_to_send)
iUDPPortRobot, iUDPPortStudent = map(int, ports_to_send.split(","))
print("Received UDP ports: Robot =", iUDPPortRobot, ", Student =", iUDPPortStudent)

s3 = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

newInput = random.randint(5, 10)
s3.sendto(str(newInput).encode(), (server_ip, iUDPPortRobot))
print("Sending %d using port %d" %(newInput, iUDPPortRobot))
s3, address = s3.accept()



s1.close()
s2.close()
s3.close()
exit()