# Comandos utiles window

Ver proceso de un puerto
```
netstat -ano | findstr PORT_NUMBER
```

Matar proceso
```
taskkill /PID PID_NUMBER /F

```

# Comandos utiles servidores linux

Ver ip
```
hostname -I
```

Ver distribución
```
lsb_release -d
```

Ver memoria ram
```
free -h
```

Ver peso de archvios agrupados en carpetas
```
du -h --max-depth=1
```

Ver shell en uso
```
echo $0
```

Ver shell disponibles
```
cat /etc/shells
```

Ver direccion de shell
```
wich bash
```

Cambiar shell
```
chsh -s $(which zsh)
```

## Instalar terminal zsh
```
sudo apt update && sudo apt install zsh
```
```
su - pm2
```
```
chsh pm2 -s /bin/zsh
```
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
```
vim ~/.zshrc # Cambiar a tema ZSH_THEME="crcandy" y despues :wq
```
### Numpad y botones inicio fin sup
Agregar al final del archivo  ~/.zshrc
```
# Keypad
# 0 . Enter
bindkey -s "^[Op" "0"
bindkey -s "^[On" "."
bindkey -s "^[OM" "^M"
# 1 2 3
bindkey -s "^[Oq" "1"
bindkey -s "^[Or" "2"
bindkey -s "^[Os" "3"
# 4 5 6
bindkey -s "^[Ot" "4"
bindkey -s "^[Ou" "5"
bindkey -s "^[Ov" "6"
# 7 8 9
bindkey -s "^[Ow" "7"
bindkey -s "^[Ox" "8"
bindkey -s "^[Oy" "9"
# + -  * / =
bindkey -s "^[Ol" "+"
bindkey -s "^[OS" "-"
bindkey -s "^[OR" "*"
bindkey -s "^[OQ" "/"
bindkey -s "^[OX" "="
# inicio fin
bindkey "^[[4~" end-of-line
bindkey "^[[1~" beginning-of-line
bindkey '^[[3~' delete-char
```

### Fix error -> zsh: command not found: pm2
Cambia de terminal a la bash
```
/usr/bin/bash
```
Muestra la ruta donde esta instalado pm2
```
 whereis pm2
```
Abre el archivo de configuracion de ZSH
```
 nano ~/.zshrc
```
Agregar al final
```
# Agregar ruta pm2
export PATH=$PATH:/home/pm2/.nvm/versions/node/v16.20.0/bin
```




### Plugins zsh

**zsh-syntax-highlighting** te muestra qué comandos están bien escritos o si existen y también los que están mal escritos o no existen. 

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

```


**zsh-autosuggestions** te muestra sugerencias y predice los que quieres hacer en base a los comandos más utilizados.

```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```


Abra el documento de configuracion de ZSH:

```
nano ~/.zshrc
```

Añada el nombre del plugin a la lista.

```
plugins=( 
[plugins...]
zsh-syntax-highlighting
zsh-autosuggestions
)
```

### Instalar Instant client ORACLE
```
mkdir /opt/oracle
sudo wget https://download.oracle.com/otn/linux/instantclient/122010/instantclient-basic-linux.x64-12.2.0.1.0.zip
sudo sh -c "echo /opt/oracle/instantclient_12_2 > /etc/ld.so.conf.d/oracle-instantclient.conf"
export LD_LIBRARY_PATH=/opt/oracle/instantclient_12_2:$LD_LIBRARY_PATH
```

### Eliminar toda las carpetas node_module (BASH)
```
cd pruebas
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
```

### Instalacion servidor

Nodejs y npm
```
    npm -v
    node -v

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

    nvm -v
    nvm list
    nvm install 18
    nvm list
    npm -v
    node -v
```
PM2
```
    npm install pm2 -g
    pm2 install typescript

```
Claves SSH
```
    cd ~/.ssh
    ssh-keygen
    cd ~/.ssh
    cat id_rsa.pub
```
Instalacion de proyecto
```
    mkdir git
    cd git/
    git clone git@github.com:gitrepo/project.git

    cd project/
    npm i
```
Firewall
```
    ufw
    ufw status
    sudo ufw status
```
MySql
```
    sudo apt-get update
    sudo apt-get install mysql-server
    sudo mysql_secure_installation utility

    sudo ufw enable
    sudo ufw allow mysql
    sudo ufw allow 22

    sudo systemctl start mysql
    sudo systemctl enable mysql
    sudo systemctl restart mysql

    mysql -u root -p <root_password>
    mysql -u root

    /usr/bin/mysql -u root -p
    sudo mysql -u root

    mysql -V
    sudo mysql -u root
```

