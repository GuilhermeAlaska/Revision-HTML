/*  Comands gitbash    

    git log --> See all commited files
    git status --> See status of all the current files
    cd Documents/ --> Open directory
    clear --> Clear entire log on the screen
    touch ' ' --> Create a file
    mkdir 'sub' --> Create a directory
    vim ' ' --> Change file         esc > : > wq / q 
    git add 'file' --> Transfer the file to the Stage area
    git add '.' --> Transfer all the modified files to Stage area   
    git add '*.md' --> Transfer all files of the same type
    git commit -m '*md' -- > Commit all files at once
    git commit -m 'file.txt' --> Commit one file
    git diff --> See all changes in files
    git diff --staged --> See changed files in Stage area
    git restore --staged 'file.txt' --> Restore a file from Stage to Working directory
    git restore 'file.txt' --> Discard changes in a file thats in your Working directory
    git commit -m "delete file2.txt" --> Delete a file on stage area
    git rm 'file1.txt' --> Delete a file from your repository to staged area again
    git mv 'stage_area.md' '2-stage_area.md' --> Rename a file, from git
    git mv 'README.md' 'sub/README.md' --> Move a file to another directory
    git reset HEAD . --> Bring all files on Stage area to Working directory
    git commit --amend -m "modified message" --> Repair the message on the log
    git commit --amend -m "new message" --> Remend a file that's on the local database
    git checkout HASH -- nomedoarquivo --> Bring an old version of the desired file
    git clean -n --> Show the files that will be deleted with the command
    git clean -f --> Delete these files very permanently
    git commit -am "modify index" --> Makes the file go straight up to Local repository, no need to add before
    git show 'HASH' --> Show all the changes made in the file
    git show 'HASH' -- src/views/*
    cat .gitignore --> Search for ignored files
    git rm -r --cached . --> Remove all files stored in cache
    git push --> Send commit files to GitHub
    git pull --> Bring commited files on GitHub to PC
    git config --global pull.rebase false --> Apply at all
    open . --> Open the workfile on VSC

    # Working directory
    - Todos nossos arquivos
    - Working tree

    # Stage Area
    - Preparação dos nossos arquivos, para serem commitados
    - Index
    - Stage tree

    # Repository (local)
    - Banco de dados para nossos arquivos
    - Onde ficarão os pontos da história
    - Ou o histórico


*/