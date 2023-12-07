<?php

function autoload($class_name) :void{
    $class_name = explode('/',str_replace('\\', '/', $class_name));
    unset($class_name[0]);
    $class_name = join('/', $class_name);

    require $class_name . '.php' ;
}
spl_autoload_register('autoload') ;