from pyzbar.pyzbar import decode
from PIL import Image, ImageTk
import cv2
import time


def scanCode():
    video = cv2.VideoCapture(0)
    while True:
        isTrue,frame = video.read()
        cv2.imshow("my Camera", frame)
        key = cv2.waitKey(10)
        if key==ord('q'):
            cv2.imwrite('pic.png', frame)
            break
    video.release()
    d = decode(Image.open('pic.png'))
    return (d)
