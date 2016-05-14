#!/bin/sh
gulp default
rsync -av --progress dist/* root@wangli.tech:/data/www/fe.wangli.tech
