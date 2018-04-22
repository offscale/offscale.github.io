webpackJsonp([1],{Cq8y:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("WT6e"),a=o("Xjw4"),t=o("bfOx"),d=o("T5aG"),c=this&&this.__decorate||function(n,e,o,s){var a,t=arguments.length,d=t<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,s);else for(var c=n.length-1;c>=0;c--)(a=n[c])&&(d=(t<3?a(d):t>3?a(e,o,d):a(e,o))||d);return t>3&&d&&Object.defineProperty(e,o,d),d},r=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},i=function(){function n(n){this.platformPickerService=n,this.os=n.is.bind(n)}return n=c([Object(s.n)({selector:"app-getting-started",template:o("uWDm"),styles:[o("kigE")]}),r("design:paramtypes",[d.a])],n)}(),l=[{path:"",component:i}];o.d(e,"GettingStartedModule",function(){return m});var p=this&&this.__decorate||function(n,e,o,s){var a,t=arguments.length,d=t<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(n,e,o,s);else for(var c=n.length-1;c>=0;c--)(a=n[c])&&(d=(t<3?a(d):t>3?a(e,o,d):a(e,o))||d);return t>3&&d&&Object.defineProperty(e,o,d),d},m=function(){function n(){}return n=p([Object(s.K)({imports:[a.b,t.a,t.a.forChild(l)],declarations:[i]})],n)}()},kigE:function(n,e){n.exports=".pad {\n  padding: 3em 3em 0 3em;\n  overflow: hidden;\n}\n\n.docs-markdown-code {\n  display: block;\n  padding: 0 0 1em 1em;\n  white-space: pre-line;\n}\n\npre {\n  white-space: pre;\n}\n"},uWDm:function(n,e){n.exports='<div class="docs-markdown pad">\n  <h5 class="docs-markdown-h5">\n    Provision nodes onto 50+ public and private clouds, and deploy to them.\n  </h5>\n\n  <p class="docs-markdown-p">\n    At its core,\n    <a href="https://github.com/offscale" class="docs-markdown-a" target="_blank">\n      offscale\n    </a> is based around two major Python libraries: <a href="http://www.fabfile.org" class="docs-markdown-a"\n                                                        target="_blank">Fabric</a> and\n    <a href="https://libcloud.apache.org" class="docs-markdown-a" target="_blank">Apache Libcloud</a>.\n  </p>\n\n  <p class="docs-markdown-p" *ngIf="os(\'Linux\')">\n    Though this guide is for the Ubuntu linux; it should be easy to retrofit to others.\n  </p>\n\n  <p class="docs-markdown-p" *ngIf="os(\'macOS\')">\n    Though this guide has been tested on macOS High Sierra; it will probably work on older versions.\n  </p>\n\n  <p class="docs-markdown-p" *ngIf="os(\'Windows\')">\n    Follow this guide on Windows 7+.\n  </p>\n\n  <em>\n    All grey background assumes you are running in an active\n    <ng-container *ngIf="os(\'Windows\')">Command Prompt (<code>cmd.exe</code>)</ng-container>\n    <ng-container *ngIf="os(\'macOS\') || os(\'Linux\')">Terminal</ng-container>\n    session\n  </em>\n\n  <section id="step-0-install-build-dependencies">\n    <h3\n      class="docs-header-link docs-markdown-h3">\n      Step 0: Install build dependencies\n    </h3>\n    <code class="lang-bash docs-markdown-code" *ngIf="os(\'Linux\')">\n      sudo apt update\n      sudo apt install build-essential git-core tcl\n    </code>\n\n    <a *ngIf="os(\'macOS\')" href="https://developer.apple.com/downloads" class="docs-markdown-a" target="_blank">\n      Latest XCode and Command Line Tools\n    </a>\n    <code class="lang-bash docs-markdown-code" *ngIf="os(\'macOS\')">\n      /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n      brew update\n      brew install git\n    </code>\n\n    <section class="docs-guide-content" *ngIf="os(\'Windows\')">\n      Ensure you check "Add to PATH" whenever asked:\n      <ol>\n        <li><a class="docs-markdown-a"\n               href="https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15">\n          Build Tools for Visual Studio 2017\n        </a></li>\n        <li><a class="docs-markdown-a" href="https://git-scm.com/download/win">git</a></li>\n        <li><a class="docs-markdown-a" href="https://www.python.org/downloads/windows">Python 2.7</a></li>\n      </ol>\n      <p class="docs-markdown-p">Test that it installed correctly with:</p>\n      <code class="lang-bash docs-markdown-code">\n        git --version\n        cl /?\n        python --version\n      </code>\n    </section>\n    <p class="docs-markdown-p">\n      Now ensure this outputs something like "Python 2.7.14". If >3, switch to <code>python2</code> and\n      <code>pip2</code> executables for rest of guide.</p>\n    <code class="lang-bash docs-markdown-code">\n      python --version\n    </code>\n\n  </section>\n\n  <section id="step-1-install-etcd">\n    <h3\n      class="docs-header-link docs-markdown-h3">\n      Step 1: Install etcd\n    </h3>\n\n    <p class="docs-markdown-p" *ngIf="os(\'Linux\')">\n      Extract <code>etcd</code> and <code>etcdctl</code> from <a class="docs-markdown-a"\n                                                                 href="https://github.com/coreos/etcd/releases/download/v2.3.8/etcd-v2.3.8-linux-amd64.tar.gz">etcd-v2.3.8-linux-amd64.tar.gz</a>\n      into somewhere in your PATH; e.g.: <code>/usr/local/bin</code>.\n    </p>\n    <p class="docs-markdown-p" *ngIf="os(\'macOS\')">\n      Extract <code>etcd</code> and <code>etcdctl</code> from <a class="docs-markdown-a"\n                                                                 href="https://github.com/coreos/etcd/releases/download/v2.3.8/etcd-v2.3.8-darwin-amd64.zip">etcd-v2.3.8-darwin-amd64.zip</a>\n      into somewhere in your PATH; e.g.: <code>/usr/local/bin</code>.\n    </p>\n    <p class="docs-markdown-p" *ngIf="os(\'Windows\')">\n      Extract <code>etcd.exe</code> and <code>etcdctl.exe</code> from <a class="docs-markdown-a"\n                                                                         href="https://github.com/coreos/etcd/releases/download/v2.3.8/etcd-v2.3.8-windows-amd64.zip">etcd-v2.3.8-windows-amd64.zip</a>\n      into somewhere in your PATH.\n    </p>\n\n    <p class="docs-markdown-p">Test that it installed correctly&mdash;and has executable permissions&mdash;with:</p>\n    <code class="lang-bash docs-markdown-code">\n      etcd --version\n      etcdctl --version\n    </code>\n  </section>\n\n  <section id="step-2-prepare-libraries">\n    <h3\n      class="docs-header-link docs-markdown-h3">\n      Step 2: Prepare Python libraries\n    </h3>\n\n    <p class="docs-markdown-p">\n      Let\'s begin by cloning all the repositories of the offscale organisation, we\'ll use <code>gitim</code> which I\n      extended with organisation support:\n    </p>\n    <code class="lang-bash docs-markdown-code">\n      pip install https://api.github.com/repos/SamuelMarks/gitim/tarball/v2#egg=gitim\n      python -m gitim -u $YOUR_GITHUB_USERNAME -o offscale -d offscale\n    </code>\n\n    <p class="docs-markdown-p">\n      Now install them all. <a href="https://virtualenv.pypa.io" class="docs-markdown-a" target="_blank">virtualenv</a>\n      is highly recommended.\n    </p>\n\n    <p class="docs-markdown-p">\n      Since we\'re in development mode, let\'s skip the <code>requirements.txt</code> and just brute-force install them\n      all locally. Pick the right <a href="https://gist.github.com/SamuelMarks/6555ca996ce11787515af25f1d2d2a83"\n                                     class="docs-markdown-a" target="_blank"><code>pip_install_all</code></a> script for\n      your OS, then run:\n    </p>\n\n    <code class="lang-bash docs-markdown-code" *ngIf="os(\'macOS\') || os(\'Linux\')">\n      cd offscale\n      set VENV=path/to/your/virtualenv\n      pip_install_all\n      pip_install_all\n      pip_install_all\n    </code>\n    <code class="lang-bash docs-markdown-code" *ngIf="os(\'Windows\')">\n      cd offscale\n      set VENV=path\\to\\your\\virtualenv\n      pip_install_all\n      pip_install_all\n      pip_install_all\n    </code>\n  </section>\n\n  <section id="step-3-using-offstrategy">\n    <h3\n      class="docs-header-link docs-markdown-h3">\n      Step 3: Using offstrategy\n    </h3>\n\n    <p class="docs-markdown-p">\n      Part of the offscale fabric, <a href="https://github.com/offscale/offstrategy" class="docs-markdown-a"\n                                      target="_blank">offstrategy</a> handles: creation of nodes across multiple\n      providers.\n    </p>\n\n    <p class="docs-markdown-p">\n      First, ensure you are running the <code>etcd</code> server, e.g.: by running:\n    </p>\n\n    <code class="lang-bash docs-markdown-code">\n      etcd\n    </code>\n\n    <p class="docs-markdown-p">\n      See its <a href="https://github.com/offscale/offstrategy/blob/master/README.md" class="docs-markdown-a"\n                 target="_blank">README.md</a> and run this for more information:\n    </p>\n\n    <code class="lang-bash docs-markdown-code">\n      python -m offstrategy -h\n    </code>\n  </section>\n\n  <section id="step-4-using-offregister">\n    <h3\n      class="docs-header-link docs-markdown-h3">\n      Step 4: Using offregister\n    </h3>\n\n    <p class="docs-markdown-p">\n      Part of the offscale fabric, <a href="https://github.com/offscale/offregister" class="docs-markdown-a"\n                                      target="_blank">offregister</a> handles: the deployment of technology onto already\n      deployed nodes.\n    </p>\n\n    <p class="docs-markdown-p">\n      See its <a href="https://github.com/offscale/offregister/blob/master/README.md" class="docs-markdown-a"\n                 target="_blank">README.md</a> and run this for more information:\n    </p>\n\n    <code class="lang-bash docs-markdown-code">\n      python -m offregister -h\n    </code>\n\n    <p class="docs-markdown-p">\n      Configuration based deployments, you write little JSON files to specify what to deploy, where, and with what\n      customisations.\n      Here are my <a href="https://github.com/offscale/offregister/tree/master/offregister/_config"\n                     class="docs-markdown-a"\n                     target="_blank">sample configs</a>.\n    </p>\n  </section>\n\n\n  <section id="appendix">\n    <h3\n      class="docs-header-link docs-markdown-h3">\n      Appendix\n    </h3>\n\n    <p class="docs-markdown-p">\n      Note that you don\'t need to of deployed your nodes with offstrategy, add arbitrary nodes using either of the following methods.\n    </p>\n\n    The <code>offset</code> tool:\n    <code class="lang-json docs-markdown-code">\n      python -m offset -n any-cluster-myosversion-myremotehostname --ip 255.255.255.255 -u myremoteusername -i "/Users/mylocalusername/.ssh/verysecure.pem" --purpose unclustered\n    </code>\n\n\n    <p>Alternatively, manually author JSON and add it to <code>etcd</code>:</p>\n    \x3c!--<app-config-builder [config]="true"></app-config-builder>--\x3e\n\n    random_node.json\n    <pre style="background-color: rgba(0, 0, 0, 0.03); font-family: \'Roboto Mono\', monospace;">\n\n {{ \'{\' }}\n   "id": "any-cluster-myosversion-myremotehostname",\n   "name": "any-cluster-myosversion-myremotehostname",\n   "uuid": "any-cluster-myosversion-myremotehostname",\n   "private_ips": [\n     "255.255.255.255"\n   ],\n   "public_ips": [\n     "255.255.255.255"\n   ],\n   "extra": {{ \'{\' }}\n     "user_hostname_port": "myremoteusername@255.255.255.255:22",\n     "ssh_config": {{ \'{\' }}\n       "IdentityFile": "/Users/mylocalusername/.ssh/verysecure.pem",\n       "LogLevel": "FATAL",\n       "HostName": "255.255.255.255",\n       "IdentitiesOnly": "yes",\n       "PasswordAuthentication": "no",\n       "Host": "any-cluster-myosversion-myremotehostname",\n       "UserKnownHostsFile": "/dev/null",\n       "User": "myremoteusername",\n       "StrictHostKeyChecking": "yes",\n       "Port": "22"\n     {{ \'}\' }},\n     "user": "myremoteusername",\n     "provider": "azure_arm"\n   {{ \'}\' }},\n   "driver": "AzureNodeDriver",\n   "state": "running"\n {{ \'}\' }}\n    </pre>\n\n    <p class="docs-markdown-p">\n      Then you can add it to <code>etcd</code> with:\n    </p>\n\n    <code class="lang-json docs-markdown-code" *ngIf="os(\'macOS\') || os(\'Linux\')">\n      etcdctl set /unclustered/any-cluster-myosversion-myremotehostname "$(cat random_node.json)"\n    </code>\n\n    <code class="lang-json docs-markdown-code" *ngIf="os(\'Windows\')">\n      set /p RN={{\'<\'}}random_node.json\n      etcdctl set /unclustered/any-cluster-myosversion-myremotehostname "%RN%"\n    </code>\n  </section>\n\n  <hr>\n  <p class="docs-markdown-p">\n    Now you have everything you need to orchestrate with offscale.\n  </p>\n  <p class="docs-markdown-p">\n    Take a look around my <a href="https://github.com/offscale" class="docs-markdown-a" target="_blank">offregister-\n    prefixed projects</a>; and you\'ll see how easy it is to build your own.\n  </p>\n  <p class="docs-markdown-p">\n    Tried to make it as straightforward to develop with as possible; with littler variation from everyone\'s "Getting\n    Started" guides needed to enable deployment through offregister. Enjoy :)\n  </p>\n</div>\n'}});