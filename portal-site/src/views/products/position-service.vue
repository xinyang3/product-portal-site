<template>
  <article class="col-xs-12 col-md-9 col-project-content">
    <div class="box project-content">
      <div class="">
        <div class="project--header">
          <h1>上海烟草集团园区位置服务</h1>
          <span class="version label current">SR5</span>
          <div class="social-links">
            <a class="link--github" target="_blank" href="https://github.com/spring-projects/spring-cloud">
              <svg class="svg replaced-svg" height="438.549px" id="Capa_1"
                style="enable-background:new 0 0 438.549 438.549;" version="1.1" viewBox="0 0 438.549 438.549"
                width="438.549px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
                <g>
                  <path
                    d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z">
                  </path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <ul class="nav nav-tabs" id="nav-project">
          <li @click="activeIndex = 'overview'" :class="{active: activeIndex === 'overview'}">
            <a data-toggle="tab" href="#overview">
              <i class="icon-eye-open"></i>
              <span class="hide-sm">概览</span>
            </a>
          </li>
          <li @click="activeIndex = 'learn'" :class="{active: activeIndex === 'learn'}">
            <a data-toggle="tab" href="#learn">
              <i class="icon-file-text-alt"></i>
              <span class="hide-sm">文档</span>
            </a>
          </li>
          <li @click="activeIndex = 'samples'" :class="{active: activeIndex === 'samples'}">
            <a data-toggle="tab" href="#samples">
              <i class="icon-code"></i>
              <span class="hide-sm">示例</span>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="content-project">
          <!-- 概览部分 -->
          <div class="tab-pane" id="overview" :class="{active: activeIndex === 'overview'}">
            <div class="compass-section">
              <div class="project-overview">
                <div>
                  <div class="paragraph">
                    <p>
                      集成内容主要包括地图、位置、状态及消息相关数据，具体的集成方式包括
                      ZMQ 订阅和 REST API 两种方式，其中调用 REST API
                      接口时，需要进行安全访问验证，安全访问规则参 见第二章[2
                      REST-API 安全访问规则]。 下述接口中，CCS 服务路径为
                      http://192.168.253.161。
                    </p>
                  </div>
                  <div class="sect1">
                    <h2 id="features">
                      <a class="anchor" href="#features"></a>特征
                    </h2>
                    <div class="sectionbody">
                      <div class="paragraph">
                        <p>
                          实时位置信息通过的Zmq实时订阅方式获取，使用Zmq实时发布位置信息，由使用方订阅主题实时位置主题。
                        </p>
                      </div>
                      <div class="ulist">
                        <ul>
                          <li>
                            <p>服务URI定义格式,使用符合restful风格的URI</p>
                          </li>
                          <li>
                            <p>
                              服务请求方式,通过HTTP的GET、POST、PUT、DELETE方式进行请求访问。
                            </p>
                          </li>
                          <li>
                            <p>服务请求参数，所有的参数都使用UTF-8进行编码</p>
                          </li>
                          <li>
                            <p>
                              返回值统一使用Json字符串格式，必须包括以下三个部分的内容
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="sect1">
                    <h2 id="release-trains">
                      <a class="anchor" href="#release-trains"></a> 版本介绍
                    </h2>
                    <div class="sectionbody">
                      <div class="paragraph">
                        <p>
                        </p>
                      </div>
                      <table class="tableblock frame-all grid-all stretch">
                        <caption class="title">
                          表一、内容修订登记表
                        </caption>
                        <colgroup>
                          <col style="width: 30%;" />
                          <col style="width: 30%;" />
                          <col style="width: 40%;" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th class="tableblock halign-left valign-top">
                              版本
                            </th>
                            <th class="tableblock halign-left valign-top">
                              修订日期
                            </th>
                            <th class="tableblock halign-left valign-top">
                              修订内容
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="tableblock halign-left valign-top">
                              <p class="tableblock">V.0.2</p>
                            </td>
                            <td class="tableblock halign-left valign-top">
                              <p class="tableblock">2018-8-31</p>
                            </td>
                            <td class="tableblock halign-left valign-top">
                              <p class="tableblock">1. 新增：接口级地图集成支持；[一章，2.2
                                节]；
                                2. 调整：目录组织、目录命名、内容精简；</p>
                            </td>
                          </tr>
                          <tr>
                            <td class="tableblock halign-left valign-top">
                              <p class="tableblock">V.0.1</p>
                            </td>
                            <td class="tableblock halign-left valign-top">
                              <p class="tableblock">2017-8-31</p>
                            </td>
                            <td class="tableblock halign-left valign-top">
                              <p class="tableblock">1. 新增：接口级地图集成支持；[一章，2.2
                                节]；
                                2. 调整：目录组织、目录命名、内容精简；</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                <div class="admonitionblock note">
                  <table>
                    <tbody>
                      <tr>
                        <td class="icon">
                          <div class="title">Note</div>
                        </td>
                        <td class="content">
                          更多详细内容参考
                          <a
                            href="https://spring.io/blog/2017/07/21/spring-cloud-dalston-sr2-is-available-now#end-of-life-for-angel-and-brixton-release-trains">http://192.168.253.161。</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- 文档部分 -->
          <div class="tab-pane" id="learn" :class="{active: activeIndex === 'learn'}">
            <div class="project--documentation compass-section">
              <h2>文档</h2>
              <div class="project--documentation--subtitle compass-subtitle">
                <strong>集成内容</strong>主要包括地图、位置、状态及消息相关数据，具体的集成方式包括 ZMQ 订阅和
                REST API 两种方式，其中调用 REST API 接口时，需要进行安全访问验证，安全访问规则参
                见第二章[2 REST-API 安全访问规则]
              </div>
              <table class="table table--documentation">
                <tbody>
                  <tr>
                    <td>
                      <span class="release-display-name">v2.2.2 (2019.12)</span>
                      <span class="version label current">CURRENT</span>
                      <span class="version label ga">GA</span>
                    </td>
                    <td>
                      <a href="#">
                        相关文档.
                      </a>
                    </td>
                    <td>
                      <a href="">
                        API文档.
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="release-display-name">v2.2.2 (2019.05)</span>
                      <span class="version label snapshot">SNAPSHOT</span>
                    </td>
                    <td>
                      <a href="#">
                        相关文档.
                      </a>
                    </td>
                    <td>
                      <a href="">
                        API文档.
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="project--guides project--samples compass-section">
              <h2 class="project--guides--title">指导</h2>
              <div class="project--guides--subtitle compass-subtitle">
                <strong>集成内容</strong>主要包括地图、位置、状态及消息相关数据，具体的集成方式包括 ZMQ 订阅和
                REST API 两种方式，其中调用 REST API 接口时，需要进行安全访问验证，安全访问规则参
                <strong>见第二章[2 REST-API 安全访问规则]</strong>
              </div>
              <ul class="project--list-links">
                <li>
                  <a href="">
                    <span class="icon">
                      <div class="guide-icon">
                        <svg aria-hidden="true" class="icon-guides-start" data-icon="icon-guides-start"
                          focusable="false" role="img" viewBox="0 0 25.4 43.6" xmlns="http://www.w3.org/2000/svg">
                          <polygon class="shape-color-5" points="19.8,13 24.7,10.1 24.6,40 19.7,42.8 "></polygon>
                          <path class="shape-color-5"
                            d="M9.3,1.2C8.5,0.7,7.6,0.6,6.7,1L1.8,3.8c0.8-0.4,1.8-0.3,2.5,0.2L19.8,13l4.9-2.9L9.3,1.2z">
                          </path>
                          <path class="shape-color-6" d="M25.4,10.1c0-0.1,0-0.2-0.1-0.2c0-0.1,0-0.1,0-0.1c-0.1-0.1-0.2-0.2-0.3-0.3L9.7,0.6c-1-0.7-2.2-0.8-3.3-0.2
      L1.5,3.2C1.3,3.3,1.2,3.4,1.2,3.5C0.4,4.2,0,5.2,0.1,6.2L0,27.8c0.1,2.8,1.6,5.3,3.9,6.8l15.4,8.9c0.2,0.1,0.5,0.1,0.7,0l0,0l5-2.9
      c0.2-0.1,0.4-0.4,0.4-0.6L25.4,10.1L25.4,10.1z M7.1,1.6c0.6-0.2,1.3-0.1,1.8,0.2l14.3,8.2l-0.3,0.2l-3.1,1.8l-15-8.7L4.4,3.2
      L7.1,1.6z M20.4,41.5l0.1-28.1l1.3-0.8l2.1-1.2l-0.1,28.1L20.4,41.5z"></path>
                          <polyline class="shape-color-5" points="6.5,14.2 6.5,25.8 15.2,25 6.5,14.2 "></polyline>
                        </svg>
                      </div>
                    </span>
                    <strong class="project--sample--title">××××××××××××××××××××××××××××××××××××</strong>
                    <span class="project--sample--description">××××××××××××××××××××××××××××××××××××</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 示例部分 -->
          <div class="tab-pane" id="samples" :class="{active: activeIndex === 'samples'}">
            <div class="project--samples compass-section">
              <h2>安装</h2>
              <div class="paragraph">
                实时位置信息通过的Zmq实时订阅方式获取，使用Zmq实时发布位置信息，由使用方订阅主题实时位置主题。
              </div>
              <div class="sect1">
                <h2 id="release-trains">
                  <a class="anchor" href="#release-trains"></a> 快速开始
                </h2>
                <div class="sectionbody">
                  <div class="paragraph">
                    <p>
                      实时位置信息通过的Zmq实时订阅方式获取，使用Zmq实时发布位置信息，由使用方订阅主题实时位置主题。
                    </p>
                  </div>
                  <div class="listingblock">
                    <div class="content">
                      <pre class="prettyprint highlight prettyprinted">
                        <code class="language-java" data-lang="java">
                          {
                            "code": 0,
                            "message": "处理成功",
                            "data": [
                                {
                                    "userId": 1,
                                    "userPicture": "http://xxxx.png",
                                    "occupation": "engineer",
                                    "school": "public",
                                    "city": "Guangzhou",
                                    "country": "Guangzhou",
                                    "sex": "male",
                                    "credit": "120"
                                }
                            ]
                        }
                        
                      </code>
                          <button class="copy-button button button-small animate" @click="copy($event)" data-clipboard-text='{
                            "code": 0,
                            "message": "处理成功",
                            "data": [
                                {
                                    "userId": 1,
                                    "userPicture": "http://xxxx.png",
                                    "occupation": "engineer",
                                    "school": "public",
                                    "city": "Guangzhou",
                                    "country": "Guangzhou",
                                    "sex": "male",
                                    "credit": "120"
                                }
                            ]
                        }
                        '>Copy</button>
                        </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
  import copyTextClip from 'src/plugins/copy'

  export default {
    name: 'product',
    data() {
      return {
        activeIndex: 'overview'
      }
    },
    methods: {
      copy(e) {
        copyTextClip(e.target.getAttribute('data-clipboard-text'))
      }
    },
  }
</script>
<style scoped>

</style>