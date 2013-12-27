jsui
=====

结合seajs、jquery开发的一个按需加载js解析、js效果的框架工具，可以开发属于自己的html标签

通过对dom的二次解析，自定义标签的功能 Through the two analysis of DOM, make the features of the custom label

在div、input等原有html标签的基础上，二次解析，从而生成自己的特色功能标签。 Based on div, input and so on the original HTML on the label, the two resolution, thereby generating features label their.

本身可以作为js的管理框架使用

项目地址

https://github.com/caoke90/jsui



<include src="top.ejs" jsui="include"></include>

<script type="text/tcl" url="top.json" jsui="ejs">
            <div class="block blo1" jsui="test">
                <div class="title"><%=title%></div>
                <div class="module">
                    <ul>
                        <% for(var i=0;i< module.length;i++){
                        var list=module[i];
                        %>
                        <li><a href="<%=list.href%>" title="<%=list.title%>"><%=list.title%></a></li>
                        <%}%>
                    </ul>
                </div>
            </div>
        </script>
