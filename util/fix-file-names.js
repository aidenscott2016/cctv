#! /usr/bin/env node
const fs = require('fs');

const { parse, isAfter, format } = require('date-fns')

const dateFmtString = `yyyyMMdd'_'HHmmss'.jpg'`
const firstNewImage = parse('20210328_211939.jpg', dateFmtString, 0)
const path = "/home/aiden/crap/raw-timelapse-images/light"

fs.readdir(path, (err, files) => {
    files.forEach(file => {
        const date = parse(file, dateFmtString, 0)
        console.log(file)
        if (isAfter(date, firstNewImage)) {
           const newName = format()
        } else {

        }
    });
});
