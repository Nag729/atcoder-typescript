#!/bin/bash

folder_name=$1
problem_number=$2

contest_name=${folder_name##*/}
problem_name=${contest_name}_${problem_number}

test_dir=test/${problem_name}

# make test directory
if [ ! -e ${test_dir} ]; then
    oj dl -d test/${problem_name} https://atcoder.jp/contests/${contest_name}/tasks/${problem_name//-/_}
fi

oj test -c "npx ts-node src/${contest_name}/${problem_number}.ts" -d test/${problem_name} --ignore-spaces-and-newline
