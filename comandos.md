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
