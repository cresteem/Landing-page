(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{9633:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exploring-hawk-js-api-functions/utils",function(){return s(8037)}])},8037:function(e,t,s){"use strict";s.r(t),s.d(t,{__toc:function(){return h}});var n=s(5893),i=s(2673),o=s(3451),a=s(2848);s(9488);var r=s(2643),l=s(6262),c=s.n(l);let h=[{depth:2,value:"Functions",id:"functions"},{depth:3,value:"1.lastSubmissionStatusGAPI",id:"1lastsubmissionstatusgapi"},{depth:3,value:"2.getUpdatedRoutesPath",id:"2getupdatedroutespath"},{depth:3,value:"3.makeRobot",id:"3makerobot"},{depth:3,value:"4.makeSitemap",id:"4makesitemap"},{depth:3,value:"5.getLastRunTimeStamp",id:"5getlastruntimestamp"},{depth:3,value:"6._makeSitemapRobot",id:"6_makesitemaprobot"},{depth:2,value:"Usage",id:"usage"},{depth:2,value:"Conclusion",id:"conclusion"}];function d(e){let t=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",h3:"h3",strong:"strong",pre:"pre",span:"span"},(0,r.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{children:[(0,n.jsx)(t.code,{children:"utilities"})," Object"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"utilities"})," object in Hawk JS provides a set of helper functions to assist with the sitemap generation and submission processes. These functions support various aspects of managing and tracking sitemaps and their submission status."]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.h3,{id:"1lastsubmissionstatusgapi",children:["1.",(0,n.jsx)(t.code,{children:"lastSubmissionStatusGAPI"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"typescript","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"lastSubmissionStatusGAPI"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(): "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"sitemapMetaOptions"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"Retrieves the status of the last sitemap submission to Google Search Console."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"status"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"utilities"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".lastSubmissionStatusGAPI"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(status);"})]})]})}),"\n",(0,n.jsxs)(t.h3,{id:"2getupdatedroutespath",children:["2.",(0,n.jsx)(t.code,{children:"getUpdatedRoutesPath"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"typescript","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"getUpdatedRoutesPath"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(lastRunTimeStamp: number"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" lookupPatterns: string[]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ignorePattern: string[]): string[]"})]})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.p,{children:"Detects routes that have been modified since the last submission, using specified inclusion and exclusion patterns."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"updatedRoutes"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"utilities"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".getUpdatedRoutesPath"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(lastRunTimeStamp"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'**/*.html'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node_modules/**'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(updatedRoutes);"})]})]})}),"\n",(0,n.jsxs)(t.h3,{id:"3makerobot",children:["3.",(0,n.jsx)(t.code,{children:"makeRobot"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"typescript","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"makeRobot"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(): string"})]})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(t.p,{children:["Generates a ",(0,n.jsx)(t.code,{children:"robots.txt"})," file for SEO directives."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"robotStatus"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"utilities"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".makeRobot"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(robotStatus);"})]})]})}),"\n",(0,n.jsxs)(t.h3,{id:"4makesitemap",children:["4.",(0,n.jsx)(t.code,{children:"makeSitemap"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"typescript","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"makeSitemap"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(prettify: boolean"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" lookupPatterns: string[]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ignorePattern: string[]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"donotUpload:boolean"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"): "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"string"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(t.p,{children:["Creates a ",(0,n.jsx)(t.code,{children:"sitemap.xml"})," file using specified prettification and file patterns. Set ",(0,n.jsx)(t.code,{children:"donotUpload"})," to ",(0,n.jsx)(t.code,{children:"true"})," to prevent FTP uploading."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"donotUpload"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"sitemapStatus"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"utilities"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".makeSitemap"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'**/*.html'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node_modules/**'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"donotUpload);"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(sitemapStatus);"})]})]})}),"\n",(0,n.jsxs)(t.h3,{id:"5getlastruntimestamp",children:["5.",(0,n.jsx)(t.code,{children:"getLastRunTimeStamp"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"typescript","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"getLastRunTimeStamp"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(): number"})]})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves the timestamp of the last execution or submission for comparison. This is useful for filtering ",(0,n.jsx)(t.strong,{children:"updated routes"})," from non-updated routes using ",(0,n.jsx)(t.code,{children:"lastRunTimeStamp"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"lastRun"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"utilities"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".getLastRunTimeStamp"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(lastRun);"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"updatedRoutes"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"getUpdatedRoutesPath"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(lastRun);"})]})]})}),"\n",(0,n.jsxs)(t.h3,{id:"6_makesitemaprobot",children:["6.",(0,n.jsx)(t.code,{children:"_makeSitemapRobot"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"typescript","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"_makeSitemapRobot"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(prettify: boolean"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" lookupPatterns: string[]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ignorePattern: string[]): "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"<void>"})]})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(t.p,{children:["An internal function that combines the functionalities of ",(0,n.jsx)(t.code,{children:"makeSitemap"})," and ",(0,n.jsx)(t.code,{children:"makeRobot"})," to create both ",(0,n.jsx)(t.code,{children:"sitemap.xml"})," and ",(0,n.jsx)(t.code,{children:"robots.txt"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"javascript","data-theme":"default",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"utilities"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"._makeSitemapRobot"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'**/*.html'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node_modules/**'"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]})})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"These utility functions provide essential support for managing sitemaps and ensuring they are up-to-date and properly submitted to search engines. They help automate tasks and streamline the sitemap management process."}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"utilities"})," object in Hawk JS offers a comprehensive set of tools to aid in the creation, management, and submission of sitemaps. By utilizing these utilities, developers can enhance the efficiency and accuracy of their website's SEO processes."]}),"\n","\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("strong",{children:"Keywords:"}),"\n",(0,n.jsxs)("ul",{className:c().keywords,children:[(0,n.jsx)("li",{children:"hawk js"}),(0,n.jsx)("li",{children:"utilities object"}),(0,n.jsx)("li",{children:"sitemap generation"}),(0,n.jsx)("li",{children:"seo automation"}),(0,n.jsx)("li",{children:"helper functions"})]})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/exploring-hawk-js-api-functions/utils.mdx",route:"/exploring-hawk-js-api-functions/utils",frontMatter:{title:"Exploring the utilities Object in Hawk JS for SEO Automation",description:"Learn how the utilities object in Hawk JS provides powerful tools to track and manage sitemaps, ensuring efficient SEO practices and keeping your website's content visible to search engines.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"},timestamp:1719191632e3,pageMap:[{kind:"Meta",data:{"*":{theme:{breadcrumb:!1}},index:{title:"Introduction"},"getting-started-with-hawk-js":{title:"Getting Started"},"effective-indexing-with-hawk-js":{title:"Hawk Stategies"},"hawk-js-configuration-settings-guide":{title:"Configurations"},"obtaining-google-credentials-for-hawk-js":{title:"Credentials \uD83D\uDD11\uD83D\uDEA8"},"enhancing-seo-with-hawk-js-cli":{title:"CLI References"},"exploring-hawk-js-api-functions":{title:"API References",theme:{breadcrumb:!0}},"hawk-js-demonstration-repository":{title:"Demonstration"},"comprehensive-faq-for-hawk-js":{title:"FAQ"},video:{title:"Video"},"get-involved-with-hawk-js-open-source":{title:"Contribution"}}},{kind:"MdxPage",name:"comprehensive-faq-for-hawk-js",route:"/comprehensive-faq-for-hawk-js",frontMatter:{title:"Exploring Hawk JS: Frequently Asked Questions",description:"Get answers to the most frequently asked questions about Hawk JS, covering topics such as installation, configuration, supported search engines, sitemap generation, and more. This FAQ guide will enhance your understanding and effective usage of this powerful SEO tool.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"effective-indexing-with-hawk-js",route:"/effective-indexing-with-hawk-js",frontMatter:{title:"Hawk JS's Comprehensive Approach to Search Engine Indexing",description:"Discover the various strategies Hawk JS employs to ensure effective indexing by major search engines. Learn about IndexNow, the Google Indexing API, and the Google Search Console API, and how to choose the right approach for your website.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"enhancing-seo-with-hawk-js-cli",route:"/enhancing-seo-with-hawk-js-cli",frontMatter:{title:"Maximizing SEO with Hawk JS: CLI Commands and Strategies",description:"Understanding the Hawk JS CLI tool is key to enhancing your SEO efforts. This article will walk you through the usage, options, and commands, providing clear instructions on generating, uploading, and submitting sitemaps for improved search engine indexing.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"Folder",name:"exploring-hawk-js-api-functions",route:"/exploring-hawk-js-api-functions",children:[{kind:"Meta",data:{hawk:{title:"hawk ( )"},hawkstrategy:{title:"hawkStrategy { }"},utils:{title:"utilities { }"}}},{kind:"MdxPage",name:"hawk",route:"/exploring-hawk-js-api-functions/hawk",frontMatter:{title:"Hawk JS: The Secret to Efficient SEO Strategy Implementation",description:"Explore the hawk() function and its role in Hawk JS, a game-changer for developers looking to enhance their SEO strategies through effective sitemap creation and submission.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"hawkstrategy",route:"/exploring-hawk-js-api-functions/hawkstrategy",frontMatter:{title:"Hawk JS: Mastering Search Engine Indexing with hawkStrategy",description:"Discover the power of the hawkStrategy object, a key feature of Hawk JS, which provides multiple SEO strategies to enhance your website's presence on search engines like Google, Bing, and more.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"utils",route:"/exploring-hawk-js-api-functions/utils",frontMatter:{title:"Exploring the utilities Object in Hawk JS for SEO Automation",description:"Learn how the utilities object in Hawk JS provides powerful tools to track and manage sitemaps, ensuring efficient SEO practices and keeping your website's content visible to search engines.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}}]},{kind:"MdxPage",name:"exploring-hawk-js-api-functions",route:"/exploring-hawk-js-api-functions",frontMatter:{title:"Exploring Hawk JS API: A Comprehensive Reference",description:"Understanding the Hawk JS API is key to harnessing its full potential. This article will serve as your go-to reference, covering methods for indexation, sitemap generation, and more, along with code examples for your web projects.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"get-involved-with-hawk-js-open-source",route:"/get-involved-with-hawk-js-open-source",frontMatter:{title:"Hawk JS Open-Source Project: How to Get Involved",description:"Interested in contributing to the Hawk JS open-source project? This guide will walk you through the steps of forking the repository, creating branches, making changes, and submitting pull requests. Join our community and help enhance this powerful SEO tool.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"getting-started-with-hawk-js",route:"/getting-started-with-hawk-js",frontMatter:{title:"Getting Started with Hawk JS: A Step-by-Step Guide",description:"Discover the simple installation process of Hawk JS, a powerful tool for enhancing your website's SEO. This guide will ensure you have everything you need to set up Hawk JS and improve your site's visibility.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"hawk-js-configuration-settings-guide",route:"/hawk-js-configuration-settings-guide",frontMatter:{title:"Customizing Hawk JS: A Guide to Configuration Settings",description:"Dive into the configuration settings of Hawk JS by exploring the hawk.config.json file. Learn how to customize lookup patterns, ignore specific files, set timezones, and provide sensitive information for effective sitemap generation.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"hawk-js-demonstration-repository",route:"/hawk-js-demonstration-repository",frontMatter:{title:"Exploring Hawk JS: A Hands-on Demonstration",description:"Get your hands dirty with Hawk JS by exploring our demonstration repository. Clone the repo and experiment with configurations to understand how Hawk JS works, offering a unique learning experience and helping you grasp its powerful functionalities.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Introducing Hawk JS: Supercharge Your Website's SEO",description:"Hawk JS is the ultimate tool for web developers and SEO enthusiasts. Find out how it can streamline your SEO efforts, ensuring your website gains visibility and improves its search engine ranking.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"obtaining-google-credentials-for-hawk-js",route:"/obtaining-google-credentials-for-hawk-js",frontMatter:{title:"Obtaining Google Credentials for Hawk JS: A Step-by-Step Guide",description:"Learn how to obtain Google service account credentials for Hawk JS by following these detailed steps. Integrate Hawk JS with the Google Indexing API and Search Console API, ensuring seamless access to powerful SEO tools.",thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}},{kind:"MdxPage",name:"video",route:"/video",frontMatter:{title:null,description:null,thumbnailUrl:"https://cresteem.com/opensource/enhancing-seo-with-hawk-js/thumbnail.png"}}],flexsearch:{codeblocks:!0},title:"Exploring the utilities Object in Hawk JS for SEO Automation",headings:h},pageNextRoute:"/exploring-hawk-js-api-functions/utils",nextraLayout:o.ZP,themeConfig:a.Z};t.default=(0,i.j)(p)}},function(e){e.O(0,[317,229,739,888,774,179],function(){return e(e.s=9633)}),_N_E=e.O()}]);