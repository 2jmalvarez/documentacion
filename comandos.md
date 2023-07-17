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

Instalar terminal zsh
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

**zsh-syntax-highlighting** te muestra qué comandos están bien escritos o si existen y también los que están mal escritos o no existen. 

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

```


**zsh-autosuggestions** te muestra sugerencias y predice los que quieres hacer en base a los comandos más utilizados.

```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

```
exit 

exit

su - pm2
```
