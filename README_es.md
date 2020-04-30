# Reglas de vuelo para git

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [简体中文](README_zh-CN.md)∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md) ∙ [日本語](README_ja.md)*

#### ¿Qué son "reglas de vuelo"?

Una guía para astronautas (ahora, programadores usando git) acerca de qué hacer cuando las cosas van mal.

>  *Las reglas de vuelo* son los conocimientos adquiridos con tanto esfuerzo en manuales que enumeran, paso a paso, qué hacer si ocurre X y por qué. Básicamente, son procedimientos operativos extremadamente detallados y específicos de cada escenario. [...]

> La NASA ha estado capturando nuestros errores, desastres y soluciones desde principios de la década de 1960, cuando los equipos de tierra de la era Mercurio comenzaron a recopilar "lecciones aprendidas" en un compendio que ahora enumera miles de situaciones problemáticas, desde fallas en el motor hasta fallas reventadas en computadoras, y sus soluciones.

&mdash; Chris Hadfield, *An Astronaut's Guide to Life*.

#### Convenciones para este documento

En aras de la claridad, todos los ejemplos de este documento usan un indicador de bash personalizado para señalar la rama actual y si hay cambios escalonados o no. La rama se incluye entre paréntesis, y un `*` al lado del nombre de la rama indica cambios realizados.

[![Únete al chat en  https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [Repositorios](#repositorios)
    - [Quiero empezar un repositorio local](#quiero-empezar-un-repositorio-local)
    - [Quiero clonar un repositorio remoto](#quiero-clonar-un-repositorio-remoto)
  - [Editando commits](#editando-commits)
    - [¿Qué acabo de hacer en el commit?](#%C2%BFqu%C3%A9-acabo-de-hacer-en-el-commit)
    - [Escribí algo mal en el mensaje del commit](#escrib%C3%AD-algo-mal-en-el-mensaje-del-commit)
    - [Hice un commit con el nombre y correo mal configurado](#hice-un-commit-con-el-nombre-y-correo-mal-configurado)
    - [Quiero remover un archivo de un commit](#quiero-remover-un-archivo-de-un-commit)
    - [Quiero borrar o remover mi último commit](#quiero-borrar-o-remover-mi-%C3%BAltimo-commit)
    - [Eliminar/remover commit arbitrario](#eliminarremover-commit-arbitrario)
    - [Intenté subir mi commit enmendado al repositorio remoto, pero obtuve un mensaje de error](#intent%C3%A9-subir-mi-commit-enmendado-al-repositorio-remoto-pero-obtuve-un-mensaje-de-error)
    - [Accidentalmente hice un hard reset y quiero mis cambios de vuelta](#accidentalmente-hice-un-hard-reset-y-quiero-mis-cambios-de-vuelta)
    - [Accidentalment hice un commit y empujé una fusión](#accidentalment-hice-un-commit-y-empuj%C3%A9-una-fusi%C3%B3n)
    - [Accidentalmente hice un commit y empujé archivos que contienen data sensible](#accidentalmente-hice-un-commit-y-empuj%C3%A9-archivos-que-contienen-data-sensible)
  - [Staging](#staging)
    - [Necesito agregar otros cambios al commit anterior](#necesito-agregar-otros-cambios-al-commit-anterior)
    - [Quiero agregar parte de un nuevo archivo, pero no todo el archivo](#quiero-agregar-parte-de-un-nuevo-archivo-pero-no-todo-el-archivo)
    - [Quiero agregar cambios en un archivo a dos commits diferentes](#quiero-agregar-cambios-en-un-archivo-a-dos-commits-diferentes)
    - [Quiero crear mis ediciones sin escalonar y eliminar mis ediciones escalonadas](#quiero-crear-mis-ediciones-sin-escalonar-y-eliminar-mis-ediciones-escalonadas)
  - [Ediciones sin escena](#ediciones-sin-escena)
    - [Deseo mover mis ediciones sin escena a una nueva rama](#deseo-mover-mis-ediciones-sin-escena-a-una-nueva-rama)
    - [Deseo mover mis ediciones sin escena a una rama diferente existente](#deseo-mover-mis-ediciones-sin-escena-a-una-rama-diferente-existente)
    - [Quiero descartar mis cambios locales no confirmados (en escena y sin escena)](#quiero-descartar-mis-cambios-locales-no-confirmados-en-escena-y-sin-escena)
    - [Quiero descartar cambios específicos no planificados](#quiero-descartar-cambios-espec%C3%ADficos-no-planificados)
    - [Quiero descartar archivos específicos no escaneados](#quiero-descartar-archivos-espec%C3%ADficos-no-escaneados)
    - [Deseo descartar solo mis cambios locales sin escenario](#deseo-descartar-solo-mis-cambios-locales-sin-escenario)
    - [Quiero descartar todos mis archivos sin seguimiento](#quiero-descartar-todos-mis-archivos-sin-seguimiento)
  - [Ramas](#ramas)
    - [Quiero enumerar todas las ramas](#quiero-enumerar-todas-las-ramas)
    - [Crear una rama desde una confirmación](#crear-una-rama-desde-una-confirmaci%C3%B3n)
    - [Hice pull de / en la rama incorrecta](#hice-pull-de--en-la-rama-incorrecta)
    - [Quiero descartar confirmaciones locales para que mi rama sea la misma que la del servidor](#quiero-descartar-confirmaciones-locales-para-que-mi-rama-sea-la-misma-que-la-del-servidor)
    - [Hice commit a master en lugar de una nueva rama](#hice-commit-a-master-en-lugar-de-una-nueva-rama)
    - [Quiero mantener todo el archivo de otro ref-ish](#quiero-mantener-todo-el-archivo-de-otro-ref-ish)
    - [Realicé varios commits en una sola rama que debería estar en diferentes ramas](#realic%C3%A9-varios-commits-en-una-sola-rama-que-deber%C3%ADa-estar-en-diferentes-ramas)
    - [Quiero eliminar las ramas locales que se eliminaron en sentido ascendente](#quiero-eliminar-las-ramas-locales-que-se-eliminaron-en-sentido-ascendente)
    - [Accidentalmente borré mi rama](#accidentalmente-borr%C3%A9-mi-rama)
    - [Quiero eliminar una rama](#quiero-eliminar-una-rama)
    - [Quiero eliminar varias ramas](#quiero-eliminar-varias-ramas)
    - [Quiero cambiar el nombre de una rama](#quiero-cambiar-el-nombre-de-una-rama)
    - [Quiero hacer checkout en una rama remota en la que alguien más está trabajando](#quiero-hacer-checkout-en-una-rama-remota-en-la-que-alguien-m%C3%A1s-est%C3%A1-trabajando)
    - [Quiero crear una nueva rama remota desde la actual local](#quiero-crear-una-nueva-rama-remota-desde-la-actual-local)
    - [Quiero configurar una rama remota como upstream para una rama local](#quiero-configurar-una-rama-remota-como-upstream-para-una-rama-local)
    - [Quiero configurar mi HEAD para rastrear la rama remota predeterminada](#quiero-configurar-mi-head-para-rastrear-la-rama-remota-predeterminada)
  - [Rebasing y Merging](#rebasing-y-merging)
    - [Quiero deshacer rebase/merge](#quiero-deshacer-rebasemerge)
    - [Hice rebase, pero no quiero forzar el push](#hice-rebase-pero-no-quiero-forzar-el-push)
    - [Necesito combinar commits](#necesito-combinar-commits)
      - [Estrategia de merge segura](#estrategia-de-merge-segura)
      - [Necesito fusionar una rama en un solo commit](#necesito-fusionar-una-rama-en-un-solo-commit)
      - [Quiero combinar solo los commits sin haber hecho push](#quiero-combinar-solo-los-commits-sin-haber-hecho-push)
      - [Necesito abortar el merge](#necesito-abortar-el-merge)
    - [Comprobar si se combinan todos los commits de un branch](#comprobar-si-se-combinan-todos-los-commits-de-un-branch)
    - [Posibles problemas con rebase interactivos](#posibles-problemas-con-rebase-interactivos)
      - [La pantalla de edición de rebase dice 'noop'](#la-pantalla-de-edici%C3%B3n-de-rebase-dice-noop)
      - [Hubo conflictos](#hubo-conflictos)
  - [Stash](#stash)
    - [Usar stash en todos los cambios](#usar-stash-en-todos-los-cambios)
    - [Usar stash para archivos específicos](#usar-stash-para-archivos-espec%C3%ADficos)
    - [Usar stash con un mensaje](#usar-stash-con-un-mensaje)
    - [Aplicar un stash específico de la lista](#aplicar-un-stash-espec%C3%ADfico-de-la-lista)
  - [Búsqueda](#b%C3%BAsqueda)
    - [Quiero encontra un string en algún commit](#quiero-encontra-un-string-en-alg%C3%BAn-commit)
    - [Quiero buscar por autor / committer](#quiero-buscar-por-autor--committer)
    - [Quiero enumerar commits que contienen archivos específicos](#quiero-enumerar-commits-que-contienen-archivos-espec%C3%ADficos)
    - [Encontrar una etiqueta donde se hace referencia a un commit](#encontrar-una-etiqueta-donde-se-hace-referencia-a-un-commit)
  - [Submódulos](#subm%C3%B3dulos)
    - [Clonar todos los submódulos](#clonar-todos-los-subm%C3%B3dulos)
    - [Remover un submódulo](#remover-un-subm%C3%B3dulo)
  - [Objetos diversos](#objetos-diversos)
    - [Restaurar un archivo eliminado](#restaurar-un-archivo-eliminado)
    - [Eliminar una etiqueta](#eliminar-una-etiqueta)
    - [Recuperar una etiqueta eliminada](#recuperar-una-etiqueta-eliminada)
    - [Patch eliminado](#patch-eliminado)
    - [Exportar un repositorio como un archivo Zip](#exportar-un-repositorio-como-un-archivo-zip)
  - [Seguimiento de archivos](#seguimiento-de-archivos)
    - [Quiero cambiar el uso de mayúsculas de un nombre de archivo, sin cambiar el contenido del archivo](#quiero-cambiar-el-uso-de-may%C3%BAsculas-de-un-nombre-de-archivo-sin-cambiar-el-contenido-del-archivo)
    - [Quiero sobrescribir los archivos locales cuando hago un git pull](#quiero-sobrescribir-los-archivos-locales-cuando-hago-un-git-pull)
    - [Quiero eliminar un archivo de Git pero mantener el archivo](#quiero-eliminar-un-archivo-de-git-pero-mantener-el-archivo)
    - [Quiero revertir un archivo a una revisión específica](#quiero-revertir-un-archivo-a-una-revisi%C3%B3n-espec%C3%ADfica)
  - [Configuración](#configuraci%C3%B3n)
    - [Quiero agregar alias para algunos comandos de Git](#quiero-agregar-alias-para-algunos-comandos-de-git)
    - [Quiero agregar un directorio vacío a mi repositorio](#quiero-agregar-un-directorio-vac%C3%ADo-a-mi-repositorio)
    - [Quiero guardar en caché un nombre de usuario y contraseña para un repositorio](#quiero-guardar-en-cach%C3%A9-un-nombre-de-usuario-y-contrase%C3%B1a-para-un-repositorio)
    - [Quiero hacer que Git ignore los permisos y cambios en el modo de archivo](#quiero-hacer-que-git-ignore-los-permisos-y-cambios-en-el-modo-de-archivo)
  - [No tengo idea de lo que hice mal](#no-tengo-idea-de-lo-que-hice-mal)
- [Otros recursos](#otros-recursos)
  - [Libros](#libros)
  - [Tutoriales](#tutoriales)
  - [Scripts y herramientas](#scripts-y-herramientas)
  - [Clientes GUI](#clientes-gui)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Repositorios

### Quiero empezar un repositorio local

Para inicializar un directorio existente como un repositorio de Git:

```sh
(my-folder) $ git init
```

### Quiero clonar un repositorio remoto

Para clonar (copiar) un repositorio remoto, copia la url del repositorio y ejecuta:

```sh
$ git clone [url]
```

## Editando commits

### ¿Qué acabo de hacer en el commit?

Digamos que simplemente hiciste cambios a ciegas con `git commit -a` y no estás seguro de cuál fue el contenido real de la confirmación que acabas de realizar. Puedes mostrar el último commit en su HEAD actual con:

```sh
(master)$ git show
```

o

```sh
$ git log -n1 -p
```

### Escribí algo mal en el mensaje del commit

Si escribiste algo mal y todavía no has subido tu commit, puedes hacer lo siguiente para cambiar el mensaje del commit:

```sh
$ git commit --amend --only
```
Esto abrirá tu editor de texto por defecto, donde puedes editar el mensaje. Por otro lado, tú puedes hacer todo esto con un solo comando:

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

Si ya has subido tu commit, puedes corregirlo usando amend y luego forzar el push, pero esto no es recomendado.

### Hice un commit con el nombre y correo mal configurado

Si es un solo commit, corrígelo

```sh
$ git commit --amend --author "Nuevo autor <authoremail@mydomain.com>"
```

Si necesitas cambiar todo el historial, mira la página 'git filter-branch' del manual


### Quiero remover un archivo de un commit

Para remover un archivo de un commit, haz lo siguiente:

```sh
$ git checkout HEAD^ miArchivo
$ git add -A
$ git commit --amend
```

Esto es particularmente útil cuando tienes un patch abierto y has hecho commit de un archivo innecesario, necesitar forzar el push para actualizar el parche en un control remoto.

### Quiero borrar o remover mi último commit

Si necesitas eliminar commits, puedes usar lo siguiente. Sin embargo, cambiará irreversiblemente su historial y arruinará la historia de cualquier otra persona que ya haya clonado el repositorio. En resumen, si no estás seguro, nunca deberías hacer esto, nunca.

```sh
$ git reset HEAD^ --hard
$ git push --force-with-lease [remote] [branch]
```

Si no has subido tus cambios, para resetear Git al estado en el que estaba antes de realizar tu último commit (mientras mantengas tus cambios en staging):

```
(my-branch*)$ git reset --soft HEAD@{1}

```

Esto solo funciona si no subiste tu commit. Si lo hiciste, la única cosa segura por hacer es `git revert SHAofBadCommit`. Eso creará un nuevo commit que deshace todos los cambios del anterior commit. O,  si la rama que subiste es segura ante reorganizaciones (ej. otros desarrolladores no esperan recibir cambios desde ahí), puedes usar `git push --force-with-lease`. Para más, mira [la sección de arriba](#quiero-borrar-o-remover-mi-ultimo-commit).

### Eliminar/remover commit arbitrario

La misma advertencia de arriba. Nunca hagas esto si es posible.

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push --force-with-lease [remote] [branch]
```

O haz un [rebase-interactivo](#rebase-interactivo) y remueve la(s) línea(s) correspondientes al commit que quieres remover.

### Intenté subir mi commit enmendado al repositorio remoto, pero obtuve un mensaje de error

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Ten en cuenta que, al igual que con el rebase (ver más abajo), usar amend **reemplaza el anterior commit con uno nuevo**, por lo que debes forzar el push (`--force-with-lease`) de tus cambios si ya has hecho una confirmación previamente enmendada al repositorio remoto. ¡Ten cuidado cuando hagas esto &ndash; *siempre* asegúrate de especificar una rama!

```sh
(my-branch)$ git push origin mybranch --force-with-lease
```

En general, **evita forzar el push**. Es mejor crear y subir un nuevo commit que forzar el commit enmendado porque causará conflictos en el historial fuente para cualquier otro desarrolador que ha interactuado con la rama en cuestión o una de sus ramas hijas. `--force-with-lease` aún fallará, si alguien más estuviera trabajando en la misma rama que tú, y tu push forzado sobrescribiría sus cambios.

Si estás *absolutamente* seguro que nadie está trabajando en la misma rama o que tú quieres actualizar la rama *incondicionalmente*, puedes usar `--force` (`-f`), pero esto debería ser evitado en general.

### Accidentalmente hice un hard reset y quiero mis cambios de vuelta

Si accidentalmente hiciste `git reset --hard`, puedes volver a obtener tus commits de vuelta ya que git mantiene un registro de todo durante unos días.

```sh
(master)$ git reflog
```

Verás una lista de tus antiguos commits, y un commit para el reset. Escoge el SHA del commit al que quieres retornar y has el reset de nuevo:

```sh
(master)$ git reset --hard SHA1234
```

Y deberías estar ubicado en ese commit.

### Accidentalment hice un commit y empujé una fusión

Si accidentalmente fusionaste una rama a la principal de desarrollo antes de que esté lista para fusionar, todavía puedes deshacer esa fusión. Pero hay un problema: Un commit de fusión tiene más de un padre (usualmente 2).

El comando a usar
```sh
(feature-branch)$ git revert -m 1 <commit>
```
donde la opción -m 1 option menciona seleccionar el padre número 1 (la rama en la cual se hizo la fusión) como el padre a revertirlo.

Nota: el número padre no es un identificador de commit. Más bien, un commit de fusión tiene una línea `Merge: 8e2ce2d 86ac2e7`. El número padre empieza con el número 1 como índice, el primer identificador es número 1, el segundo es el número 2, y así

### Accidentalmente hice un commit y empujé archivos que contienen data sensible

Si accidentalment empujaste archivos que contienen data sensible (contraseñas, llaves, etc.), puedes modificar el commit previo. Ten en mente que una vez que hayas hecho un commit, debes considerar cualquier información que éste contiene para ser empujado. Estos pasos pueden remover la data sensible de tu repo público o tu copia local, pero **no puedes** remover la data sensible de copias jaladas de otras personas. Si quieres hacer un commit de una contraseña, **cámbialo de inmediato**. Si hiciste commit de una llave, **regenérala de inmediato**. Modificar el commit enviado no es suficiente, ya que cualquiera podría haber retirado el commit original que contiene sus datos confidenciales en ese tiempo.

Si editas un archivo y remueves la data sensible, entonces ejecuta
```sh
(feature-branch)$ git add edited_file
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```

Si quieres remover un archivo entero (pero mantenerlo localmente), entonces ejecuta
```sh
(feature-branch)$ git rm --cached sensitive_file
echo sensitive_file >> .gitignore
(feature-branch)$ git add .gitignore
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```
Alternativamente guarda tu data sensible en variables de entorno locales.

Si quieres remover completamente un archivo completo (y no mantenerlo localmente), entonces ejecuta
```sh
(feature-branch)$ git rm sensitive_file
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```

Si haz hecho otros commits durante ese tiempo (ej. la data sensible está en un commit antes de ese commit), necesitarás hacer un rebase.

## Staging

### Necesito agregar otros cambios al commit anterior

```sh
(mi-rama*)$ git commit --amend
```

### Quiero agregar parte de un nuevo archivo, pero no todo el archivo

Normalmente, si deseas representar parte de un archivo, ejecuta esto:

```sh
$ git add --patch archivo.x
```

`-p` funcionará para abreviar. Esto abrirá el modo interactivo. Puedes usar la opción `s` para dividir la confirmación; sin embargo, si el archivo es nuevo, no tendrás esta opción. Para agregar un nuevo archivo, usa esto:

```sh
$ git add -N archivo.x
```

Luego, necesitarás usar la opción `e` para elegir manualmente qué líneas agregar. Ejecutando `git diff --cached` o
`git diff -staged` se mostrará qué líneas ha comparado con las que todavía se guardan localmente.

### Quiero agregar cambios en un archivo a dos commits diferentes

`git add` agregará el archivo completo a un commit. `git add -p` te permitirá seleccionar interactivamente los cambios que deseas agregar.

### Quiero crear mis ediciones sin escalonar y eliminar mis ediciones escalonadas

Esto es complicado. Lo mejor que creo es que debes esconder tus ediciones sin escena. Luego, restablecer. Después de eso, muestra tus cambios ocultos y agrégalos.

```sh
$ git stash -k
$ git reset --hard
$ git stash pop
$ git add -A
```

## Ediciones sin escena

### Deseo mover mis ediciones sin escena a una nueva rama

```sh
$ git checkout -b mi-rama
```

### Deseo mover mis ediciones sin escena a una rama diferente existente

```sh
$ git stash
$ git checkout my-rama
$ git stash pop
```

### Quiero descartar mis cambios locales no confirmados (en escena y sin escena)

Si deseas descartar todos los cambios organizados y no supervisados ​​locales, puede hacer esto:

```sh
(mi-rama) $ git reset --hard
# o
(master) $ git checkout -f
```

Esto borrará todos los archivos que hayas organizado con `git add`:

```sh
$ git reset
```

Esto revertirá todos los cambios locales no confirmados (se debe ejecutar en la raíz del repositorio):

```sh
$ git checkout .
```

También puedes revertir cambios no confirmados a un archivo o directorio en particular:

```sh
$ git checkout [some_dir | file.txt]
```

Otra forma de revertir todos los cambios no confirmados (más largo de escribir, pero funciona desde cualquier subdirectorio):

```sh
$ git reset --hard HEAD
```

Esto eliminará todos los archivos locales sin seguimiento, por lo que solo se conservarán los archivos rastreados por Git:

```sh
$ git clean -fd
```

`-x` también eliminará todos los archivos ignorados.

### Quiero descartar cambios específicos no planificados

Cuando desees deshacerse de algunos, pero no de todos los cambios en su copia de trabajo.

Verifica los cambios no deseados, mantén buenos cambios.

```sh
$ git checkout -p
# Responde y a todos los cambios que desea eliminar
```

Otra estrategia implica el uso de `stash`. Guarda todos los buenos cambios, restablece la copia de trabajo y vuelve a aplicar los buenos cambios.

```sh
$ git stash -p
# Selecciona todos los cambios que desea guardar
$ git reset --hard
$ git stash pop
```

Alternativamente, oculta sus cambios no deseados, y luego deja el escondite.

```sh
$ git stash -p
# Selecciona todos los cambios que no quiere guardar
$ git stash drop
```

### Quiero descartar archivos específicos no escaneados

Cuando desees deshacerse de un archivo específico en su copia de trabajo.

```sh
$ git checkout myFile
```

Alternativamente, para descartar varios archivos en su copia de trabajo, enumera todos.

```sh
$ git checkout myFirstFile mySecondFile
```

### Deseo descartar solo mis cambios locales sin escenario

Cuando desees deshacerse de todos sus cambios no confirmados locales sin confirmar

```sh
$ git checkout .
```
### Quiero descartar todos mis archivos sin seguimiento

Cuando desees deshacerse de todos sus archivos sin seguimiento

```sh
$ git clean -f
```

## Ramas

### Quiero enumerar todas las ramas

Enumerar ramas locales

```sh
$ git branch
```

Enumerar ramas remotas

```sh
$ git branch -r
```

Listar todas las ramas (tanto locales como remotas)

```sh
$ git branch -a
```

### Crear una rama desde una confirmación

```sh
$ git checkout -b <branch> <SHA1_OF_COMMIT>
```
### Hice pull de / en la rama incorrecta

Esta es otra oportunidad de usar `git reflog` para ver dónde apuntó el HEAD antes del mal tirón.

```sh
(master) $ git reflog
ab7555f HEAD @ {0}: pull-wrong-branch: Fast-forward
c5bc55a HEAD @ {1}: checkout: checkout message goes here
```

Simplemente restablece tu rama al commit deseado:

```sh
$ git reset --hard c5bc55a
```

Hecho.

### Quiero descartar confirmaciones locales para que mi rama sea la misma que la del servidor

Confirma que no ha enviado sus cambios al servidor.

`git status` debe mostrar cuántos commits tienes adelantado al origin:

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

Una forma de reiniciar para hacer coincidir el origin (tener lo mismo que lo que está en el control remoto) es hacer esto:

```sh
(master) $ git reset --hard origin / my-branch
```

### Hice commit a master en lugar de una nueva rama

Crea la nueva rama mientras permaneces en master:

```sh
(master) $ git branch my-branch
```

Restablece la rama master al commit anterior:

```sh
(master) $ git reset --hard HEAD ^
```

`HEAD ^` es la abreviatura de `HEAD ^ 1`. Esto representa el primer padre de `HEAD`, del mismo modo` HEAD ^ 2` representa el segundo padre del commit (las fusiones pueden tener 2 padres).

Ten en cuenta que `HEAD ^ 2` ** no ** es lo mismo que` HEAD ~ 2` (vea [este enlace] (http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde) para más información).

Alternativamente, si no quieres usar `HEAD ^`, averigüe a qué hash de confirmación quieres establecer su rama principal (`git log` debería ser el truco). Luego reinicia a ese hash. `git push` se asegurará de que este cambio se refleje en su control remoto.

Por ejemplo, si el hash del commit en el que se supone que está su rama principal es `a13b85e`:

```sh
(master) $ git reset --hard a13b85e
HEAD is now at a13b85e
```

Verifique la nueva rama para continuar trabajando:

```sh
(master) $ git checkout my-branch
```

### Quiero mantener todo el archivo de otro ref-ish

Supongamos que tienes un pico activo (ver nota), con cientos de cambios. Todo está funcionando. Ahora, te comprometes con otra rama para guardar ese trabajo:

```sh
(solución) $ git add -A && git commit -m "Agregando todos los cambios desde este pico en un gran compromiso."
```

Cuando desees colocarlo en una rama (tal vez función, tal vez `develop`), te interesa conservar archivos completos. Quieres dividir tu gran compromiso en otros más pequeños.

Digamos que tienes:

  * branch `solution`, con la solución para tu spike. Uno por delante de `develop`.
  * branch `develop`, donde desea agregar sus cambios.

Puedes resolverlo llevando los contenidos a tu rama:

```sh
(develop) $ git checkout solution - file1.txt
```

Esto obtendrá los contenidos de ese archivo en la 'solución' de la rama a su rama `develop`:

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

Entonces, haz un commit como de costumbre.

Nota: Las soluciones de Spike están hechas para analizar o resolver el problema. Estas soluciones se utilizan para la estimación y se descartan una vez que todos obtienen una visualización clara del problema. ~ [Wikipedia] (https://en.wikipedia.org/wiki/Extreme_programming_practices).

### Realicé varios commits en una sola rama que debería estar en diferentes ramas

Digamos que estás en tu rama principal. Al ejecutar `git log`, verás que ha realizado dos commits:

```sh
(master) $ git log

commit e3851e817c451cc36f2e6f3049db528415e3c114
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:27 2014 -0400

    Bug #21 - Added CSRF protection

commit 5ea51731d150f7ddc4a365437931cd8be3bf3131
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:12 2014 -0400

    Bug #14 - Fixed spacing on title

commit a13b85e984171c6e2a1729bb061994525f626d14
Author: Aki Rose <akirose@example.com>
Date:   Tue Jul 21 01:12:48 2014 -0400

    First commit
```

Toma nota de nuestros hashes de confirmación para cada error (`e3851e8` para # 21,` 5ea5173` para # 14).

Primero, restablece la rama principal al commit correcto (`a13b85e`):

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Ahora, puedes crear una nueva rama para la rama bug # 21:

```sh
(master) $ git checkout -b 21
(21) $
```

Ahora, * selecciona con precisión * el commit para el error # 21 en la parte superior de la rama. Eso significa que aplicarás ese commit, y solo ese commit, directamente sobre el HEAD que estés.

```sh
(21) $ git cherry-pick e3851e8
```

En este punto, existe la posibilidad de que haya conflictos. Consulta la sección ** Hubo conflictos ** (# conflicto de fusión) en la [sección interactiva de rebase más arriba] (# interactive-rebase) para saber cómo resolver conflictos.

Ahora creamos una nueva rama para el error # 14, también basado en el master

```sh
(21) $ git checkout master
(master) $ git checkout -b 14
(14) $
```

Y finalmente, vamos a seleccionar el compromiso para el error # 14:

```sh
(14) $ git cherry-pick 5ea5173
```

### Quiero eliminar las ramas locales que se eliminaron en sentido ascendente
Una vez que fusiona una solicitud de extracción en GitHub, le da la opción de eliminar la rama fusionada en su fork. Si no tiene planeado seguir trabajando en la rama, es más limpio eliminar las copias locales de la rama para que no termine complicando su proceso de pago con muchas ramas obsoletas.

```sh
$ git fetch -p upstream
```

donde, 'ascendente' es el control remoto desde el que desea recuperar.

### Accidentalmente borré mi rama

Si empujas regularmente hacia el control remoto, deberías estar seguro la mayor parte del tiempo. Pero aún así a veces puede terminar borrando sus ramaes. Digamos que creamos una rama y creamos un nuevo archivo:

```sh
(master)$ git checkout -b my-branch
(my-branch)$ git branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

Vamos a agregarlo y hacer el commit.

```sh
(my-branch)$ git add .
(my-branch)$ git commit -m 'foo.txt added'
(my-branch)$ foo.txt added
 1 files changed, 1 insertions(+)
 create mode 100644 foo.txt
(my-branch)$ git log

commit 4e3cd85a670ced7cc17a2b5d8d3d809ac88d5012
Author: siemiatj <siemiatj@example.com>
Date:   Wed Jul 30 00:34:10 2014 +0200

    foo.txt added

commit 69204cdf0acbab201619d95ad8295928e7f411d5
Author: Kate Hudson <katehudson@example.com>
Date:   Tue Jul 29 13:14:46 2014 -0400

    Fixes #6: Force pushing after amending commits
```

Ahora estamos volviendo a "master" y "accidentalmente" eliminando nuestra rama.

```sh
(my-branch)$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
(master)$ git branch -D my-branch
Deleted branch my-branch (was 4e3cd85).
(master)$ echo oh noes, deleted my branch!
oh noes, deleted my branch!
```

En este punto, debe familiarizarse con 'reflog', un registrador actualizado. Almacena el historial de todas las acciones en el repositorio.

```
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to master
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from master to my-branch
```

Como puede ver, hemos confirmado el hash de nuestra rama eliminada. Veamos si podemos restaurar nuestra rama eliminada.

```sh
(master)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

Voila! Recuperamos nuestro archivo eliminado. `git reflog` también es útil cuando el rebase es terriblemente incorrecto.

### Quiero eliminar una rama

Para eliminar una rama remota:

```sh
(master) $ git push origin --delete my-branch
```

También puedes hacer:

```sh
(master) $ git push origin: my-branch
```

Para eliminar una rama local:

```sh
(master) $ git branch -d my-branch
```

Para eliminar una rama local que * no * se ha fusionado con la rama actual o una cadena ascendente:

```sh
(master) $ git branch -D my-branch
```

### Quiero eliminar varias ramas

Supongamos que quiere eliminar todas las ramas que comienzan con `fix /`:

```sh
(master) $ git rama | grep 'fix /' | xargs git branch -d
```

### Quiero cambiar el nombre de una rama

Para cambiar el nombre de la rama actual (local):

```sh
(master) $ git branch -m new-name
```

Para cambiar el nombre de una rama diferente (local):

```sh
(master) $ git branch -m old-name new-name
```

### Quiero hacer checkout en una rama remota en la que alguien más está trabajando

Primero, busca todas las ramas desde el control remoto:

```sh
(master)$ git fetch --all
```

Digamos que quieres hacer checkout a `daves` desde el repositorio remoto.

```sh
(master)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

(`--track` es la abreviatura de 'git checkout -b [branch] [remotename] / [branch]`)

Esto le dará una copia local de la rama `daves`, y cualquier actualización que se haya enviado también se mostrará de forma remota.

### Quiero crear una nueva rama remota desde la actual local

```sh
$ git push <remote>
```

Si también desea establecer esa rama remota como cadena arriba para la actual, use lo siguiente:

```sh
$ git push -u <remote>
```

Con el modo `upstream` y el modo `simple` (predeterminado en Git 2.0) de la configuración `push.default`, el siguiente comando empujará la bifurcación actual con respecto a la bifurcación remota que se ha registrado previamente con `-u `:

```sh
$ git push
```

El comportamiento de los otros modos de ```git push``` se describe en el documento de push.default.

### Quiero configurar una rama remota como upstream para una rama local

Puedes establecer una rama remota como ascendente para la sucursal local actual usando:

```sh
$ git branch --set-upstream-to [remotename]/[branch]
# or, using the shorthand:
$ git branch -u [remotename]/[branch]
```

Para establecer la rama remota ascendente para otra rama local:

```sh
$ git branch -u [remotename] / [branch] [local-branch]
```

### Quiero configurar mi HEAD para rastrear la rama remota predeterminada

Al verificar tus ramas remotas, puedes ver en qué rama remota está rastreando el HEAD. En algunos casos, esta no es la rama deseada.

```sh
$ git branch -r
  origin/HEAD -> origin/gh-pages
  origin/master
```

Cambiar `origin / HEAD` para rastrear` origin / master`, puedes ejecutar este comando:

```sh
$ git remote set-head origin --auto
origin/HEAD set to master
```

## Rebasing y Merging

### Quiero deshacer rebase/merge

Es posible que hayas fusionado o rediseñado tu rama actual con una rama incorrecta, o que no puedas resolverlo o finalizar el proceso de rebase/merge. Git guarda el puntero original HEAD en una variable llamada ORIG_HEAD antes de realizar operaciones peligrosas, por lo que es sencillo recuperar la rama en el estado anterior al rebase/merge.


```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

### Hice rebase, pero no quiero forzar el push

Desafortunadamente, debes forzar el push, si deseas que esos cambios se reflejen en la rama remota. Esto se debe a que ha cambiado el historial. La rama remota no aceptará cambios a menos que fuerce la inserción. Esta es una de las principales razones por las que muchas personas usan un flujo de trabajo de merge, en lugar de un flujo de trabajo de reordenación: los equipos grandes pueden tener problemas con el impulso de los desarrolladores. Usa esto con precaución. Una forma más segura de utilizar rebase no es reflejar los cambios en la rama remota, sino hacer lo siguiente:


```sh
(master)$ git checkout my-branch
(my-branch)$ git rebase -i master
(my-branch)$ git checkout master
(master)$ git merge --ff-only my-branch
```

Para obtener más información, consulte [este thread SO] (https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).

### Necesito combinar commits

Supongamos que estás trabajando en una rama que es / se convertirá en un pull request contra master. En el caso más simple, cuando todo lo que quiere hacer es combinar todos los commits en uno solo y no le importa cometer timestamps, puedes restablecer y volver a hacer el commit. Asegúrate de que la rama principal esté actualizada y de que se hayan confirmado todos los cambios, luego:

```sh
(my-branch)$ git reset --soft master
(my-branch)$ git commit -am "New awesome feature"
```

Si deseas más control y también conservar las marcas de tiempo, debe hacer algo que se llame un rebase interactivo:


```sh
(my-branch)$ git rebase -i master
```

Si no estás trabajando contra otra rama tendrás que volver a establecer una base relativa a tu `HEAD`. Si quieres aplastar las últimas 2 confirmaciones, por ejemplo, tendrás que volver a calcular contra `HEAD ~ 2`. Para los últimos 3, `HEAD ~ 3`, etc.

```sh
(master)$ git rebase -i HEAD~2
```

Después de ejecutar el comando de rebase interactivo, verás algo como esto en tu editor de texto:


```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
pick b729ad5 fixup
pick e3851e8 another fix

# Rebase 8074d12..b729ad5 onto 8074d12
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Todas las líneas que comienzan con `#` son comentarios, no afectarán a tu rebase.

Reemplaza los comandos `pick` con cualquiera en la lista anterior, y también puedes eliminar commits eliminando las líneas correspondientes.

Por ejemplo, si deseas **dejar el commit más antiguo (el primero) solo y combinar todos los siguientes commits con el segundo más antiguo**, debes editar la letra junto a cada commit, excepto la primera y la segunda para decir `f` :

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

Si deseas combinar estos commits **y cambiar el nombre del commit**, también debes agregar una `r` junto al segundo commit o simplemente usar` s` en lugar de `f`:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

A continuación, puedes cambiar el nombre del commit en el siguiente mensaje de texto que aparece.


```vim
Newer, awesomer features

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# rebase in progress; onto 8074d12
# You are currently editing a commit while rebasing branch 'master' on '8074d12'.
#
# Changes to be committed:
#   modified:   README.md
#

```

Si todo tiene éxito, deberías ver algo como esto:

```sh
(master)$ Successfully rebased and updated refs/heads/master.
```

#### Estrategia de merge segura
`--no-commit` realiza el merge, pero simula que la combinación falló y no se confirma automáticamente, lo que le da al usuario la oportunidad de inspeccionar y modificar aún más el resultado de la combinación antes de realizar la tarea. `no-ff` mantiene la evidencia de que alguna vez existió una rama de características, manteniendo la historia del proyecto consistente.

```sh
(master)$ git merge --no-ff --no-commit my-branch
```

#### Necesito fusionar una rama en un solo commit

```sh
(master)$ git merge --squash my-branch
```

#### Quiero combinar solo los commits sin haber hecho push

A veces tiene varios commits en progreso que deseas combinar antes de hacer push. No deseas combinar accidentalmente ningún commit que ya haya sido pusheado porque otra persona ya haya realizado commits que les hagan referencia.

```sh
(master)$ git rebase -i @{u}
```

Esto hará una base de datos interactiva que enumera solo los commits que aún no has enviado, por lo que será seguro reordenar / arreglar / aplastar cualquier elemento de la lista.

#### Necesito abortar el merge

A veces, la fusión puede producir problemas en ciertos archivos, en esos casos podemos usar la opción `abort` para abortar el proceso actual de resolución de conflictos, y tratar de reconstruir el estado previo a la fusión.

```sh
(my-branch)$ git merge --abort
```

Este comando está disponible desde la versión de Git> = 1.7.4

### Comprobar si se combinan todos los commits de un branch

Para comprobar si todos los commits de una rama se fusionan en otra, debe distinguir las cabeceras (o los commits) de esas ramas:

```sh
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

Esto te dirá si hay commits en una pero no en la otra, y te dará una lista de las no compartidas entre las ramas. Otra opción es hacer esto:

```sh
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### Posibles problemas con rebase interactivos

#### La pantalla de edición de rebase dice 'noop'

Si estás viendo esto:
```
noop
```

Eso significa que estás tratando de volver a establecer una base contra una rama que está en un commit idéntico, o está *delante* de tu rama actual. Puedes probar:

* asegurándote de que tu rama principal esté donde debería estar
* rebase contra `HEAD ~ 2` o anterior a su lugar

#### Hubo conflictos

Si no puedes completar correctamente el rebase, es posible que tengas que resolver conflictos.

Primero ejecuta `git status` para ver qué archivos tienen conflictos en ellos:

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  both modified:   README.md
```

En este ejemplo, `README.md` tiene conflictos. Abre ese archivo y busca lo siguiente:

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

Tendrás que resolver las diferencias entre el código que se agregó en tu nuevo commit (en el ejemplo, todo desde la línea media hasta `new-commit ') y tu' HEAD '.

Si deseas conservar la versión del código de una rama, puedes usar `--us` o` --theirs`:

```sh
(master*)$ git checkout --ours README.md
```

- Cuando haces *merge*, usa `--ours` para mantener los cambios de la rama local, o` --theirs` para mantener los cambios de la otra rama.
- Cuando haces *rebase*, usa `--theirs` para mantener los cambios de la rama local, o` --ours` para mantener los cambios de la otra rama. Para obtener una explicación de este intercambio, consulte [esta nota en la documentación de Git] (https://git-scm.com/docs/git-rebase#git-rebase---merge).

Si las fusiones son más complicadas, puede usar un editor visual diff:

```sh
(master*)$ git mergetool -t opendiff
```

Después de haber resuelto todos los conflictos y probado el código, `git add` los archivos que has cambiado, y luego continúa el rebase con` git rebase --continue`

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

Si después de resolver todos los conflictos terminas con un árbol idéntico a lo que era antes del commit, necesitas `git rebase --skip` en su lugar.

Si en algún momento deseas detener todo el rebase y volver al estado original de tu rama, puedes hacer:

```sh
(my-branch)$ git rebase --abort
```

## Stash

### Usar stash en todos los cambios

Para esconder todas las ediciones de tu directorio de trabajo

```sh
$ git stash
```

Si también quiere esconder archivos sin seguimiento, use la opción `-u`.

```sh
$ git stash -u
```

### Usar stash para archivos específicos

Para esconder solo un archivo de tu directorio de trabajo

```sh
$ git stash push working-directory-path/filename.ext
```

Para esconder varios archivos de tu directorio de trabajo

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

### Usar stash con un mensaje

```sh
$ git stash save <message>
```

### Aplicar un stash específico de la lista

Primero revisa la lista de stash con mensaje usando

```sh
$ git stash list
```

Luego selecciona un stash específico de la lista usando

```sh
$ git stash apply "stash@{n}"
```

Aquí, 'n' indica la posición del stash en la pila. El stash más alto será la posición 0.

## Búsqueda

### Quiero encontra un string en algún commit

Para encontrar un determinada string que se introdujo en cualquier commit, puedes usar la siguiente estructura:

```sh
$ git log -S "string to find"
```

Parámetros comunes:

* `--source` significa mostrar el nombre de la referencia dada en la línea de comando por la cual se llegó a cada commit.

* `--all` significa comenzar desde cada rama.

* `--reverse` imprime en orden inverso, significa que mostrará el primer commit que realizó el cambio.

### Quiero buscar por autor / committer

Para encontrar todos los commits por autor / committer, puedes usar:

```sh
$ git log --author=<name or email>
$ git log --committer=<name or email>
```

Ten en cuenta que autor y committer no son lo mismo. El `--autor` es la persona que originalmente escribió el código; por otro lado, el `--committer` es la persona que subió el código en nombre del autor original.

### Quiero enumerar commits que contienen archivos específicos

Para encontrar todos los commits que contienen un archivo específico, puedes usar:

```sh
$ git log -- <path to file>
```

Por lo general, debes especificar una ruta exacta, pero también puede usar comodines en la ruta y el nombre del archivo:

```sh
$ git log -- **/*.js
```

Al usar comodines, es útil informar `--name-status` para ver la lista de archivos comprometidos:

```sh
$ git log --name-status -- **/*.js
```

### Encontrar una etiqueta donde se hace referencia a un commit

Para encontrar todas las etiquetas que contienen un commit específico:

```sh
$ git tag --contains <commitid>
```

## Submódulos

### Clonar todos los submódulos

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

Si ya fue clonado

```sh
$ git submodule update --init --recursive
```

### Remover un submódulo

Crear un submódulo es bastante simple, pero eliminarlos no. Los comandos que necesitas son:

```sh
$ git submodule deinit submodulename
$ git rm submodulename
$ git rm --cached submodulename
$ rm -rf .git/modules/submodulename
```

## Objetos diversos

### Restaurar un archivo eliminado

Primero encuentra el commit donde el archivo existió por última vez:

```sh
$ git rev-list -n 1 HEAD -- filename
```

Luego hazle checkout a ese archivo

```
git checkout deletingcommitid^ -- filename
```

### Eliminar una etiqueta

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

### Recuperar una etiqueta eliminada

Si deseas recuperar una etiqueta que ya fue eliminada, puede hacerlo siguiendo estos pasos: Primero, debe encontrar la etiqueta inalcanzable:

```sh
$ git fsck --unreachable | grep tag
```

Toma nota del hash de la etiqueta. Luego, restaura la etiqueta eliminada con la siguiente, haciendo uso de [`git update-ref`] (https://git-scm.com/docs/git-update-ref):

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

Tu etiqueta ahora debería haber sido restaurada.

### Patch eliminado

Si alguien envió un pull request en GitHub, pero luego eliminó el fork original, no podrá clonar su repositorio ni usar `git am` como [.diff, .patch] (https://github.com / blog / 967-github-secrets) las URL no están disponibles. Pero puedes verificar el PR utilizando las [referencias especiales de GitHub] (https://gist.github.com/piscisaureus/3342247). Para recuperar el contenido de PR # 1 en una nueva rama llamada pr_1:

```sh
$ git fetch origin refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### Exportar un repositorio como un archivo Zip

```sh
$ git archive --format zip --output /full/path/to/zipfile.zip master
```

## Seguimiento de archivos

### Quiero cambiar el uso de mayúsculas de un nombre de archivo, sin cambiar el contenido del archivo

```sh
(master)$ git mv --force myfile MyFile
```

### Quiero sobrescribir los archivos locales cuando hago un git pull

```sh
(master)$ git fetch --all
(master)$ git reset --hard origin/master
```

### Quiero eliminar un archivo de Git pero mantener el archivo

```sh
(master)$ git rm --cached log.txt
```

### Quiero revertir un archivo a una revisión específica

Suponiendo que el hash del commit que deseas es c5f567:

```sh
(master)$ git checkout c5f567 -- file1/to/restore file2/to/restore
```

Si desea volver a los cambios realizados solo 1 commit antes de c5f567, pase el hash de confirmación como c5f567 ~ 1:

```sh
(master)$ git checkout c5f567~1 -- file1/to/restore file2/to/restore
```

## Configuración

### Quiero agregar alias para algunos comandos de Git

En OS X y Linux, tu archivo de configuración de git se almacena en ```~ / .gitconfig```. He agregado algunos alias de ejemplo que uso como accesos directos (y algunos de mis errores comunes) en la sección `` `[alias]` `` como se muestra a continuación:

```vim
[alias]
    a = add
    amend = commit --amend
    c = commit
    ca = commit --amend
    ci = commit -a
    co = checkout
    d = diff
    dc = diff --changed
    ds = diff --staged
    f = fetch
    loll = log --graph --decorate --pretty=oneline --abbrev-commit
    m = merge
    one = log --pretty=oneline
    outstanding = rebase -i @{u}
    s = status
    unpushed = log @{u}
    wc = whatchanged
    wip = rebase -i @{u}
    zap = fetch -p
```

### Quiero agregar un directorio vacío a mi repositorio

¡No puedes! Git no es compatible con esto, pero hay un truco. Puede crear un archivo .gitignore en el directorio con los siguientes contenidos:

```
 # Ignore everything in this directory
 *
 # Except this file
 !.gitignore
```

Otra convención común es crear un archivo vacío en la carpeta, titulado .gitkeep.

```sh
$ mkdir mydir
$ touch mydir/.gitkeep
```

También puedes nombrar el archivo como .keep, en cuyo caso la segunda línea de arriba sería ```touch mydir / .keep```

### Quiero guardar en caché un nombre de usuario y contraseña para un repositorio

Es posible que tengas un repositorio que requiera autenticación. En ese caso, puedes guardar en caché un nombre de usuario y contraseña para que no tenga que ingresarlos en cada push / pull. Credential helper puede hacer esto por ti.

```sh
$ git config --global credential.helper cache
# Set git to use the credential memory cache
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Set the cache to timeout after 1 hour (setting is in seconds)
```

### Quiero hacer que Git ignore los permisos y cambios en el modo de archivo

```sh
$ git config core.fileMode false
```

Si deseas que este sea el comportamiento predeterminado para los usuarios que han iniciado sesión, utilice:

```sh
$ git config --global core.fileMode false
```

## No tengo idea de lo que hice mal

Entonces, estás jodido, "reiniciaste" algo, o fusionaste la rama incorrecta, o forzaste empujar y ahora no puedes encontrar tus commits. Sabes, en algún momento, estabas bien y quieres volver a un estado en el que estabas.

Para esto está hecho `git reflog`. `reflog` realiza un seguimiento de los cambios en la punta de una rama, incluso si esa sugerencia no está referenciada por una rama o una etiqueta. Básicamente, cada vez que HEAD cambia, se agrega una nueva entrada al reflog. Esto solo funciona para los repositorios locales, lamentablemente, y solo rastrea los movimientos (no los cambios a un archivo que no fueron grabados en ninguna parte, por ejemplo).

```sh
(master)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to master
c10f740 HEAD@{2}: checkout: moving from master to 2.2
```

El reflog anterior muestra una salida desde master a la rama 2.2 y viceversa. A partir de ahí, hay un restablecimiento completo de un commit más antiguo. La última actividad se representa en la parte superior con la etiqueta 'HEAD @ {0} `.

Si resulta que retrocedió accidentalmente, el reflog contendrá el master de un commit apuntado a (0254ea7) antes de que accidentalmente soltara 2 commits.

```sh
$ git reset --hard 0254ea7
```

Usando `git reset` es posible cambiar el master al commit que era antes. Esto proporciona una red de seguridad en caso de que la historia se haya cambiado accidentalmente.

(copiado y editado desde [Fuente] (https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)).

# Otros recursos

## Libros

* [Pro Git](https://git-scm.com/book/en/v2) - Excelente libro de Scott Chacon y Ben Straub sobre Git
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - Otro excelente libro de Scott Chacon sobre Git

## Tutoriales

* [Tutorial de Git de Atlassian](https://www.atlassian.com/git/tutorials) Obtenga Git a la derecha con tutoriales de principiante a avanzado.
* [Aprende la ramificación de Git](https://learngitbranching.js.org/) Tutorial interactivo de ramificación / fusión / rebase basado en la web
* [Obteniendo solidez en Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer) 'Howto sobre el uso de Git para contribuir a repositorios de código abierto
* [GitHub como flujo de trabajo](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - Una interesante idea sobre el uso de GitHub como flujo de trabajo, particularmente con los PR vacíos
* [Githug](https://github.com/Gazler/githug) - Un juego para aprender más flujos de trabajo de Git

## Scripts y herramientas

* [firstaidgit.io](http://firstaidgit.io/) Una selección de búsqueda de las preguntas más frecuentes de Git
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - una colección de scripts extra útiles de Git
* [git-extras](https://github.com/tj/git-extras) - Utilidades de GIT - resumen de repo, repl, población de registro de cambios, porcentajes de confirmación de autor y más
* [git-fire](https://github.com/qw3rtman/git-fire) - git-fire es un plugin de Git que ayuda en caso de una emergencia al agregar todos los archivos actuales, comprometerse y empujar a un nuevo rama (para evitar conflictos de combinación).
* [git-tips](https://github.com/git-tips/tips) - Consejos pequeños de Git
* [git-town](https://github.com/Originate/git-town) - Soporte genérico de alto nivel de flujo de trabajo de Git! http://www.git-town.com

## Clientes GUI
* [GitKraken](https://www.gitkraken.com/) - El cliente francamente lujoso de Git, para Windows, Mac y Linux
* [git-cola](https://git-cola.github.io/) - otro cliente de Git para Windows y OS X
* [GitUp](https://github.com/git-up/GitUp) - Una interfaz gráfica de usuario nueva que tiene algunas formas muy dogmáticas de lidiar con las complicaciones de Git
* [gitx-dev](https://rowanj.github.io/gitx/) - otro cliente gráfico de Git para OS X
* [Sourcetree](https://www.sourcetreeapp.com/) - Simplicity se une a la potencia en una hermosa y gratuita GUI de Git. Para Windows y Mac.
* [Tower](https://www.git-tower.com/) - cliente gráfico de Git para OS X (pago)
* [tig](https://jonas.github.io/tig/) - interfaz de texto en modo terminal para Git
* [Magit](https://magit.vc/) - Interfaz para Git implementada como un paquete de Emacs.
* [GitExtensions](https://github.com/gitextensions/gitextensions): una extensión de shell, un plugin de Visual Studio 2010-2015 y una herramienta de repositorio de Git independiente.
* [Fork](https://git-fork.com/) - un cliente de Git rápido y amigable para Mac (beta)
* [gmaster](https://gmaster.io/) - un cliente de Git para Windows que tiene combinación de 3 vías, analizan refactores, diferencias semánticas y fusión (beta)
* [gitk](https://git-scm.com/docs/gitk) - un cliente de Git para Linux para permitir una vista simple del estado de repos.
