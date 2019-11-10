(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));a(59),a(32),a(23),a(24),a(60),a(0);var n=a(166),r=a(168);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={id:"ipynb_example",title:"Jupyter Notebook Example",sidebar_label:"Jupyter Notebook Example"},l=[{value:"Example Data",id:"example-data",children:[]},{value:"Data Sources",id:"data-sources",children:[]},{value:"Viewing Examples and Statistics",id:"viewing-examples-and-statistics",children:[]},{value:"Google Translate Integration",id:"google-translate-integration",children:[]},{value:"Fairseq Integration",id:"fairseq-integration",children:[]},{value:"More Examples",id:"more-examples",children:[]}],o={rightToc:l},c="wrapper";function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"example-data"},"Example Data"),Object(n.b)("p",null,"To get the data for the following examples:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/facebookresearch/vizseq\n$ cd vizseq\n$ bash get_example_data.sh\n")),Object(n.b)("p",null,"The data will be available in ",Object(n.b)("inlineCode",{parentName:"p"},"examples/data"),"."),Object(n.b)("h2",{id:"data-sources"},"Data Sources"),Object(n.b)("p",null,"VizSeq accepts data from various types of sources: plain text file paths, ZIP file paths and Python dictionaries.\n(See also the ",Object(n.b)("a",i({parentName:"p"},{href:"../features/data"}),"data inputs")," section for more details.)"),Object(n.b)("p",null,"Here is an example for plain text file paths as inputs:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"from glob import glob\nroot = 'examples/data/translation_wmt14_en_de_test'\nsrc, ref, hypo = glob(f'{root}/src_*.txt'), glob(f'{root}/ref_*.txt'), glob(f'{root}/pred_*.txt')\n")),Object(n.b)("p",null,"An example for Python dictionaries as inputs:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"from typing import List, Dict\nimport os.path as op\nfrom glob import glob\n\ndef reader(paths: List[str]) -> Dict[str, List[str]]:\n    data = {}\n    for path in paths:\n        name = str(op.splitext(op.basename(path))[0]).split('_', 1)[1]\n        with open(path) as f:\n            data[name] = [l.strip() for l in f]\n    return data\n\nroot = 'examples/data/translation_wmt14_en_de_test'\nsrc = reader(glob(f'{root}/src_*.txt'))\nref = reader(glob(f'{root}/ref_*.txt'))\nhypo = reader(glob(f'{root}/pred_*.txt'))\n")),Object(n.b)("h2",{id:"viewing-examples-and-statistics"},"Viewing Examples and Statistics"),Object(n.b)("p",null,"Please see the ",Object(n.b)("a",i({parentName:"p"},{href:"features/ipynb_api"}),"Jupyter Notebook APIs")," section for full references."),Object(n.b)("p",null,"First, load the ",Object(n.b)("inlineCode",{parentName:"p"},"vizseq")," package:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"import vizseq\n")),Object(n.b)("p",null,"To view dataset statistics:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"vizseq.view_stats(src, ref)\n")),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:Object(r.a)("img/view_stats.png"),alt:"View Statistics"})),Object(n.b)("p",null,"To view source-side n-grams:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"vizseq.view_n_grams(src)\n")),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:Object(r.a)("img/view_n_grams.png"),alt:"View N Grams"})),Object(n.b)("p",null,"To view corpus-level scores (BLEU and METEOR):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"vizseq.view_scores(ref, hypo, ['bleu', 'meteor'])\n")),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:Object(r.a)("img/view_scores.png"),alt:"View Scores"})),Object(n.b)("p",null,"To check the IDs of available scorers in VizSeq:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"vizseq.available_scorers()\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"Available scorers: bert_score, bleu, bp, chrf, cider, gleu, laser, meteor, nist, ribes, rouge_1, rouge_2, rouge_l, ter, wer, wer_del, wer_ins, wer_sub\n")),Object(n.b)("p",null,"We can view examples in pages with sorting:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"import vizseq.VizSeqSortingType\nvizseq.view_examples(src, ref, hypo, ['bleu'], page_sz=2, page_no=12, sorting=VizSeqSortingType.src_len)\n")),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:Object(r.a)("img/view_examples.png"),alt:"View Examples"})),Object(n.b)("h2",{id:"google-translate-integration"},"Google Translate Integration"),Object(n.b)("p",null,"VizSeq integrates Google Translate using Google Cloud API, to use which you need a Google Cloud credential and let VizSeq know the credential JSON file path:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"vizseq.set_google_credential_path('path to google credential json file')\n")),Object(n.b)("p",null,"Then in example viewing API, simply switch the ",Object(n.b)("inlineCode",{parentName:"p"},"need_g_translate")," argument on:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"vizseq.view_examples(src, ref, hypo, ['bleu'], need_g_translate=True)\n")),Object(n.b)("h2",{id:"fairseq-integration"},"Fairseq Integration"),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/pytorch/fairseq"}),"Fairseq")," is a popular sequence modeling toolkit developed by Facebook AI Research.\nVizSeq can directly import and analyze model predictions generated by ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/pytorch/fairseq/blob/master/generate.py"}),Object(n.b)("inlineCode",{parentName:"a"},"fairseq-generate"))," and ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/pytorch/fairseq/blob/master/interactive.py"}),Object(n.b)("inlineCode",{parentName:"a"},"fairseq-interactive")),". The\nAPIs are almost the same:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-python"}),"from vizseq.ipynb import fairseq_viz as vizseq_fs\n\nlog_path = 'examples/data/wmt14_fr_en_test.fairseq_generate.log'\n\nvizseq_fs.view_stats(log_path)\nvizseq_fs.view_examples(log_path, ['bleu', 'meteor'], need_g_translate=True)\nvizseq_fs.view_scores(log_path, ['bleu', 'meteor'])\nvizseq_fs.view_n_grams(log_path)\n")),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:Object(r.a)("img/fairseq_view_examples.png"),alt:"Fairseq View"})),Object(n.b)("h2",{id:"more-examples"},"More Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/facebookresearch/vizseq/blob/master/examples/multimodal_machine_translation.ipynb"}),"Multimodal Machine Translation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/facebookresearch/vizseq/blob/master/examples/multilingual_machine_translation.ipynb"}),"Multilingual Machine Translation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/facebookresearch/vizseq/blob/master/examples/speech_translation.ipynb"}),"Speech Translation"))))}p.isMDXComponent=!0},166:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n),i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,m=p[l+"."+b]||p[b]||c[b]||i;return a?r.a.createElement(m,Object.assign({},{ref:t},o,{components:a})):r.a.createElement(m,Object.assign({},{ref:t},o))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[o]="string"==typeof e?e:n,s[1]=l;for(var b=2;b<i;b++)s[b]=a[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},167:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=function(){return Object(n.useContext)(r.a)}},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(169);var n=a(167);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},169:function(e,t,a){"use strict";var n=a(9),r=a(25),i=a(94),s="".startsWith;n(n.P+n.F*a(95)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return s?s.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);