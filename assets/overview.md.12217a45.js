import{_ as e,c as a,o as n,a as t}from"./app.8a139030.js";const k='{"title":"Overview","description":"","frontmatter":{},"headers":[{"level":2,"title":"Setup the Project","slug":"setup-the-project"},{"level":2,"title":"Back-end","slug":"back-end"},{"level":3,"title":"Start the back-end server","slug":"start-the-back-end-server"},{"level":3,"title":"How to add a table in SQLite","slug":"how-to-add-a-table-in-sqlite"},{"level":2,"title":"Front-end","slug":"front-end"},{"level":3,"title":"Start the frontend server","slug":"start-the-frontend-server"},{"level":2,"title":"Deploy","slug":"deploy"},{"level":3,"title":"Deploy the app on the Railway","slug":"deploy-the-app-on-the-railway"}],"relativePath":"overview.md"}',s={},r=t(`<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h1><h2 id="setup-the-project" tabindex="-1">Setup the Project <a class="header-anchor" href="#setup-the-project" aria-hidden="true">#</a></h2><p>The Starter is prerequisites the teck stack below:</p><ul><li><a href="https://golang.org/doc/install" target="_blank" rel="noopener noreferrer">Go</a> (1.16 or later)</li><li><a href="https://github.com/cosmtrek/air#installation" target="_blank" rel="noopener noreferrer">Air</a> (1.27.10 or later). This is for backend live reload.</li><li><a href="https://pnpm.io/installation" target="_blank" rel="noopener noreferrer">pnpm</a> The front-end efficient node package manager.</li></ul><h2 id="back-end" tabindex="-1">Back-end <a class="header-anchor" href="#back-end" aria-hidden="true">#</a></h2><h3 id="start-the-back-end-server" tabindex="-1">Start the back-end server <a class="header-anchor" href="#start-the-back-end-server" aria-hidden="true">#</a></h3><p>follow the command</p><div class="language-bash"><pre><code><span class="token function">pnpm</span> run dev:be
or
air -c backend/scripts/.air.toml
</code></pre></div><p>then you will see the messages in the console:</p><div class="language-bash"><pre><code>  __    _   ___
 / /<span class="token punctuation">\\</span>  <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span>
/_/--<span class="token punctuation">\\</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token punctuation">\\</span>_ <span class="token number">1.27</span>.8, built with Go <span class="token number">1.17</span>.3

watching <span class="token builtin class-name">.</span>
<span class="token operator">!</span>exclude .air
watching api
watching bin
watching bin/server
watching bin/server/cmd
watching common
watching scripts
watching server
watching store
watching store/migration
watching store/seed
building<span class="token punctuation">..</span>.
running<span class="token punctuation">..</span>.


\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557  \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551    \u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557   \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D    \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D

____________________________________________________

\u21E8 http server started on <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:8080
</code></pre></div><p>Then the backend server is listened on <code>8080</code></p><h3 id="how-to-add-a-table-in-sqlite" tabindex="-1">How to add a table in SQLite <a class="header-anchor" href="#how-to-add-a-table-in-sqlite" aria-hidden="true">#</a></h3><h2 id="front-end" tabindex="-1">Front-end <a class="header-anchor" href="#front-end" aria-hidden="true">#</a></h2><h3 id="start-the-frontend-server" tabindex="-1">Start the frontend server <a class="header-anchor" href="#start-the-frontend-server" aria-hidden="true">#</a></h3><p>follow the command</p><div class="language-bash"><pre><code><span class="token function">pnpm</span> run dev:fe
or
<span class="token builtin class-name">cd</span> frontend <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> run dev
</code></pre></div><p>then you will see the messages in the console:</p><div class="language-bash"><pre><code>vite v2.8.6 dev server running at:

<span class="token operator">&gt;</span> Local: <span class="token punctuation">[</span>https://localhost:3000<span class="token punctuation">]</span><span class="token punctuation">(</span>https://localhost:3000<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> Network: use <span class="token variable"><span class="token variable">\`</span>--host<span class="token variable">\`</span></span> to expose

ready <span class="token keyword">in</span> 669ms.
</code></pre></div><div class="language-ts"><pre><code>
</code></pre></div><h2 id="deploy" tabindex="-1">Deploy <a class="header-anchor" href="#deploy" aria-hidden="true">#</a></h2><h3 id="deploy-the-app-on-the-railway" tabindex="-1">Deploy the app on the Railway <a class="header-anchor" href="#deploy-the-app-on-the-railway" aria-hidden="true">#</a></h3>`,21),o=[r];function p(l,i,c,d,h,_){return n(),a("div",null,o)}var v=e(s,[["render",p]]);export{k as __pageData,v as default};
