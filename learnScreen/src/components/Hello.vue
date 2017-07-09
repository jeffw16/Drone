<template>
  <div id="content">
    <div id="textContent">
      <div class="titlebox tfspacing">
        <h5>Python Syntax</h5>
      </div>
      <div class="panel panel-default" data-simplebar>
        <div class="panel-body">
          <article class="markdown-body">
                <!-- put markdowned stuff here -->
                <h1>GitHub Flavored Markdown</h1>
                <div class="highlight highlight-source-js">
                  <pre><span class="pl-k">var</span> syntaxHighlighting <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>awesome<span class="pl-pds">"</span></span>;
                  <span class="pl-en">alert</span>(syntaxHighlighting); </pre></div>
                <p>In addition to the changes in the previous section, certain references are auto-linked:</p>
                <ul>
                <li>SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2</li>
                <li>User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2</li>
                <li>User/Project@SHA: <a href="https://github.com/mojombo/god/commit/be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2" class="commit-link">mojombo/god@<tt>be6a8cc</tt></a></li>
                <li>#Num: #1</li>
                <li>User/#Num: mojombo#1</li>
                <li>User/Project#Num: <a href="https://github.com/mojombo/god/issues/1" class="issue-link js-issue-link" data-url="https://github.com/mojombo/god/issues/1" data-id="15201" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">mojombo/god#1</a></li>
                </ul>
                <p>These are dangerous goodies though, and we need to make sure email addresses don't get mangled:</p>
                <p>My email addy is <a href="mailto:tom@github.com">tom@github.com</a>.</p>
                <h2>Math is hard, let's go shopping</h2>
                <p>In first grade I learned that 5 &gt; 3 and 2 &lt; 7. Maybe some arrows. 1 -&gt; 2 -&gt; 3. 9 &lt;- 8 &lt;- 7.</p>
                <p>Triangles man! a^2 + b^2 = c^2</p>
                <h2>We all like making lists</h2>
                <p>The above header should be an H2 tag. Now, for a list of fruits:</p>
                <ul>
                <li>Red Apples</li>
                <li>Purple Grapes</li>
                <li>Green Kiwifruits</li>
                </ul>
                <p>Let's get crazy:</p>
                <ol>
                <li>
                <p>This is a list item with two paragraphs. Lorem ipsum dolor<br>
                sit amet, consectetuer adipiscing elit. Aliquam hendrerit<br>
                mi posuere lectus.</p>
                <p>Vestibulum enim wisi, viverra nec, fringilla in, laoreet<br>
                vitae, risus. Donec sit amet nisl. Aliquam semper ipsum<br>
                sit amet velit.</p>
                </li>
                <li>
                <p>Suspendisse id sem consectetuer libero luctus adipiscing.</p>
                </li>
                </ol>
                <p>What about some code <strong>in</strong> a list? That's insane, right?</p>
                <ol>
                <li>
                <p>In Ruby you can map like this:</p>
                <pre><code>['a', 'b'].map { |x| x.uppercase }['a', 'b'].map { |x| x.uppercase }
                </code></pre>
                </li>
                <li>
                <p>In Rails, you can do a shortcut:</p>
                <pre><code> ['a', 'b'].map(&amp;:uppercase)
                </code></pre>
                </li>
                </ol>
                <p>Some people seem to like definition lists</p>
                <dl>
                  <dt>Lower cost</dt>
                  <dd>The new version of this product costs significantly less than the previous one!</dd>
                  <dt>Easier to use</dt>
                  <dd>We've changed the product so that it's much easier to use!</dd>
                </dl>
                <h2>I am a robot</h2>
                <p>Maybe you want to print <code>robot</code> to the console 1000 times. Why not?</p>
                <pre><code>def robot_invasion
                  puts("robot " * 1000)
                end
                </code></pre>
                <p>You see, that was formatted as code because it's been indented by four spaces.</p>
                <p>How about we throw some angle braces and ampersands in there?</p>
                <pre><code>&lt;div class="footer"&gt;
                    © 2004 Foo Corporation
                &lt;/div&gt;
                </code></pre>
                <h2>Set in stone</h2>
                <p>Preformatted blocks are useful for ASCII art:</p>
                <pre>             ,-.
                    ,     ,-.   ,-.
                   / \   (   )-(   )
                   \ |  ,.&gt;-(   )-&lt;
                    \|,' (   )-(   )
                     Y ___`-'   `-'
                     |/__/   `-'
                     |
                     |
                     |    -hrr-
                  ___|_____________
                </pre>
                <h2>Playing the blame game</h2>
                <p>If you need to blame someone, the best way to do so is by quoting them:</p>
                <blockquote>
                <p>I, at any rate, am convinced that He does not throw dice.</p>
                </blockquote>
                <p>Or perhaps someone a little less eloquent:</p>
                <blockquote>
                <p>I wish you'd have given me this written question ahead of time so I<br>
                could plan for it... I'm sure something will pop into my head here in<br>
                the midst of this press conference, with all the pressure of trying to<br>
                come up with answer, but it hadn't yet...</p>
                <p>I don't want to sound like<br>
                I have made no mistakes. I'm confident I have. I just haven't - you<br>
                just put me under the spot here, and maybe I'm not as quick on my feet<br>
                as I should be in coming up with one.</p>
                </blockquote>
                <h2>Table for two</h2>
                <table>
                  <tbody><tr>
                    <th>ID</th><th>Name</th><th>Rank</th>
                  </tr>
                  <tr>
                    <td>1</td><td>Tom Preston-Werner</td><td>Awesome</td>
                  </tr>
                  <tr>
                    <td>2</td><td>Albert Einstein</td><td>Nearly as awesome</td>
                  </tr>
                </tbody></table>
                <h2>Crazy linking action</h2>
                <p>I get 10 times more traffic from [Google] <a href="http://google.com/" title="Google">1</a> than from<br>
                [Yahoo] <a href="http://search.yahoo.com/" title="Yahoo Search">2</a> or [MSN] <a href="http://search.msn.com/" title="MSN Search">3</a>.</p>
                <!-- end markdowned stuff -->
              </article>
        </div>
      </div>
    </div>
    <div id="codeContent">
      <div class="titlebox tfspacing">
        <div id="tabthing" class="veryfake">
          <h5 id="realone">Console</h5>
        </div>
        <div id="tabthing" class="veryreal">
          <h5 id="realone">Console</h5>
        </div>
      </div>
      <div id="textEditor">

      </div>
      <div id="submission">
        <div class="tfspacing">
          <el-button type="primary" @click="completed = true">Run Code</el-button>
          <el-button type="danger" @click="completed = false">Reset</el-button>
          <transition name="el-fade-in">
            <el-button type="success" v-show="completed" class="transition-box">Next Exercise</el-button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      completed: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tfspacing {
  padding-left: 25px;
}

.tfspacing > button {
  margin-right: 3px;
}
/*#textEditor*/
#tabthing {
  background-color: #354551;
  z-index: 10;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: 100%;
  padding: 0 20px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: flex-start;
  align-items: center;
}

.veryfake {
  color: #354551;
  position: absolute;
  height: 40px !important;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  padding-bottom: 2px !important;
}

#codeContent > .tfspacing > #tabthing > h5 {
  margin: 0;
  font-weight: normal;
  font-size: .7em;
}

.titlebox {
  height: 40px;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: flex-start;
  align-items: center;
}

#content {
  text-align: left;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  overflow: hidden;
}

#textContent {
  height: 100%;
  width: 27%;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}

#codeContent {
  height: 100%;
  width: 73%;
  overflow: auto;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}

#codeContent > .titlebox {
  background-color: #2a3034;
  color: white;
  font-size: 1.3em;
}

#codeContent > #textEditor {
  background: #354551;
  flex: 2;
  border-top: 1px solid black;
  z-index: 9;
}

#codeContent > #submission {
  height: 60px;
  background-color: #2a3034;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: flex-start;
  align-items: center;
}

#textContent > .titlebox {
  color: #969696;
  background-color: white;
  background-image: -webkit-linear-gradient(top, #fff, #f0f0f0);
  border-bottom: 1px solid rgba(0,0,0,0.15);
}

#textContent > .panel {
  flex: 2;
  overflow-y: auto;
  overflow-x: hidden;
}

#textContent .panel .panel-body {
  padding: 20px 25px 25px 25px;
}

</style>
