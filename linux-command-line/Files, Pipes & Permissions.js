/*
    1. less -> allow to addd content.
    2. more -> older program of less.
    3. man -> manual page for add content.
    4. cat -> grab file and show.
    5. tail -n (no. of line) -> show that lines.
    6. mkdir -> create folder.
        -p for multiple directory.
    7. rm -> remove file.
            for direcotry use rm -r.
            -f used for force mean don't ask just remove.
            * will remove all the files
    8. cp -> used for copy.
        eg. sp source_file destination_file
         -R used for recursive.
    9. mv -> for move the file.
    10. tar -> for creating tar file.
        eg. tar -cf filename.tar files files ...
        tar -xzf file_name will extract that file.
        tar -xzf file_name -C Destination will extract in destination folder.
    11. touch {1,2,3,4}.txt will create 4 different file.
            {1..10} create file in this range includes the range.
    12. {}{} -> used for create multiple files.
    13. output Stream -> (>)
        1> file_name -> put message into file.
            1>> use for appending.
            eg echo 'hi' 1> new-file.txt
            2> use for non-existing file.
    14. input Stream -> (<)

    15. grep -> used for looking.
    16. pip -> one thing to another.
    17. ps -> show current processes.
    18. & -> used for run process in background.
    19. sudo useradd 'name' -> add new user
            sudo passwd -> add password for that user.
    20. su -> switch user.
    21. sudo usermod -aG 'user_name'.
    22. sudo chown -> to change permissions on the file.
    23. sudo chmod u=rw, g=rw, o=rw file_name.
            sudo 777 permit all the users to r/w data.
    24. chmox +x -> give ability to execute.
*/
