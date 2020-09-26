/*
    1. source/bash(not change directory) -> (.) to execute file.
    2. read -> read -p use to read from user.
    3. condition's
        if [ -z(used for empty string) ]; then
            echo''
        fi
    4  -w -> does file exist and write.
    5. -e -> does file exist.
    6. case -> (argument) in
                case1)
                    echo
                        ;;
                case2)
                    echo
                        ;;
                *)
                    ;;
        esac
    7. array -> 
        friends=(kyle Marc Jem "Brian Holt" Sarah)

        echo My second friend is ${friends[1]}

        for friend in ${friends[*]}
        do
            echo friend: $friend
        done
        
        echo "i have ${#friends[*]} friends"

    8. while ->
            while [ var -ne range]
            do 
                read -p 
            done

            echo 
*/