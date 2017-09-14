#!/usr/bin/env node

const __root = process.cwd();
const fs = require('fs');
const exec = require('child_process').exec;
const path = require('path');
const program = require('commander');
const mkdirp = require('mkdirp');
const download = require('download-git-repo');

function initProj(name){
	console.log('name',name)
	if(name === undefined) return;
	else{
		console.log('准备创建项目: ' + name );
	    var projPath = __root + '/' + name;
	    if(!fs.existsSync(projPath)){
	    	console.log('模板下载中，请耐心等待……');
	      	download('piexl/tplPc', __root+ '/' + name, function(err) {
	        	console.log(err ? err : '项目创建成功');
		        //创建成功以后，进入项目目录
	      });
	    }else {
	    	console.warn(name + ' 项目已经存在，请使用别的名字');
	    }
	}
}

program
	.usage('[options] <file ...>')
	.option('-i, --init [value]', '创建初始项目')
	.parse(process.argv);

initProj(program.init);
