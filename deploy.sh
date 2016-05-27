#!/bin/sh
gulp default
rsync -av --progress app/* liangqi@wangli.tech:www
