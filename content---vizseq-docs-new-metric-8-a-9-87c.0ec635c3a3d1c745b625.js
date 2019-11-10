(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));r(59),r(32),r(23),r(24),r(60),r(0);var t=r(166);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var o={id:"new_metric",title:"Adding New Metrics",sidebar_label:"Adding New Metrics"},c=[{value:"Implementing A New Scorer Class",id:"implementing-a-new-scorer-class",children:[]},{value:"Testing the New Scorer Class",id:"testing-the-new-scorer-class",children:[]}],i={rightToc:c},a="wrapper";function l(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,["components"]);return Object(t.b)(a,s({},i,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"VizSeq has an open API for adding user-defined metrics. You are welcomed to contribute new scorers to enlarge VizSeq's metric coverage!"),Object(t.b)("h3",{id:"implementing-a-new-scorer-class"},"Implementing A New Scorer Class"),Object(t.b)("p",null,"To start with, first add ",Object(t.b)("inlineCode",{parentName:"p"},"new_metric.py")," to ",Object(t.b)("inlineCode",{parentName:"p"},"vizseq/scorers"),", in which a new scorer class is inherited from ",Object(t.b)("inlineCode",{parentName:"p"},"VizSeqScorer")," and a ",Object(t.b)("inlineCode",{parentName:"p"},"score")," method is defined.\nAnd then register the new scorer class with an id and a name using ",Object(t.b)("inlineCode",{parentName:"p"},"vizseq.scorers.register_scorer"),":"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{className:"language-python"}),"from typing import Optional, List\nfrom vizseq.scorers import register_scorer, VizSeqScorer, VizSeqScore\n\n@register_scorer('new_metric_id', 'New Metric Name')\nclass NewMetricScorer(VizSeqScorer):\n    def score(\n            self, hypothesis: List[str], references: List[List[str]],\n            tags: Optional[List[List[str]]] = None\n    ) -> VizSeqScore:\n        # calculate the number of workers by number of examples\n        self._update_n_workers(len(hypothesis))\n\n        corpus_score, group_scores, sent_scores = None, None, None\n\n        if self.corpus_level:\n            # implement corpus-level score\n            corpus_score = 99.9\n        if self.sent_level:\n            # implement sentence-level score\n            sent_scores=[99.9, 99.9]\n        if tags is not None:\n            tag_set = self._unique(tags)\n            # implement group-level (by sentence tags) score\n            group_scores={t: 99.9 for t in tag_set}\n\n        return VizSeqScore.make(\n            corpus_score=corpus_score, sent_scores=sent_scores,\n            group_scores=group_scores\n        )\n")),Object(t.b)("h3",{id:"testing-the-new-scorer-class"},"Testing the New Scorer Class"),Object(t.b)("p",null,"All the scorer classes need to be covered by tests. To achieve that, Add a unit test ",Object(t.b)("inlineCode",{parentName:"p"},"test_new_metric.py")," to ",Object(t.b)("inlineCode",{parentName:"p"},"tests/scorers")," and run:"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{className:"language-bash"}),"$ python -m unittest tests.scorers.test_new_metric\n")))}l.isMDXComponent=!0},166:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return u}));var t=r(0),s=r.n(t),o=s.a.createContext({}),c=function(e){var n=s.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},i=function(e){var n=c(e.components);return s.a.createElement(o.Provider,{value:n},e.children)};var a="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},p=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,a=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),p=c(r),u=t,m=p[i+"."+u]||p[u]||l[u]||o;return r?s.a.createElement(m,Object.assign({},{ref:n},a,{components:r})):s.a.createElement(m,Object.assign({},{ref:n},a))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[a]="string"==typeof e?e:t,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);