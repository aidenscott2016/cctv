#!/usr/bin/env python3
import glob
import os, sys
from PIL import Image
import shutil




def isDark(i):
    im = Image.open(i)
    x = 1
    y = 1
    pix = im.load()
    r,g, b = pix[x,y]
    if r+g+b < 10 :
        return True
    else:
        return False

print(sys.argv[1] + '*.jpg')
dir =  sys.argv[1]
for name in glob.glob(dir + '/*.jpg'):
    dark = isDark(name)
    str = "{} is dark: {}".format(name, dark)
    print(str)

    if dark:
        shutil.copy(name, dir + '/dark')
    else:
        shutil.copy(name, dir + '/light')

    shutil.move(name, dir + 'processed')
