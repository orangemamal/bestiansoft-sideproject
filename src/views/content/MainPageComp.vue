<template>
  <div class="main_page_wrap">
    <nav>
      <img src="@/assets/images/gnb_logo.svg" alt="gnb_logo">
      
      <ul>
        <li>Propose a bill</li>
        <li>Recevabilite</li>
        <li>Commissiom</li>
        <li>Plenary schedule</li>
        <li>Document Manage</li>
      </ul>
      
      <div class="side_function">
        <button class="logout_btn">
          <img src="@/assets/icons/icon_logout.svg" alt="logout">
        </button>

        <div class="select_group">
          <select id="language" name="language">
            <option value="FRANCE">FRANCE</option>
            <option value="FRANCE">FRANCE</option>
            <option value="FRANCE">FRANCE</option>
            <option value="FRANCE">FRANCE</option>
          </select>
          <img src="@/assets/icons/icon_lang_arrow.svg" alt="arrow">
        </div>
      </div>
    </nav>

    <main>
      <aside>
        <div class="top">
          <div class="user_section">
            <div class="picture_wrap">
              <div class="picture" />
              <img src="@/assets/icons/icon_edit.svg" alt="edit">
            </div>

            <div class="user_name">
              <h3>{{ "Nom" }}</h3>
              <p>{{ "의원" }}</p>
            </div>

            <div class="user_time">
              <span>최종 접속 시간</span>
              <img src="@/assets/icons/icon_time.svg" alt="time">
              <span>{{ "05 / 10 / 23 17:12 PM" }}</span>
            </div>

            <div class="user_alarm">
              <img class="alarm" src="@/assets/icons/icon_alarm.svg" alt="alarm">

              <ul class="alarm_list">
                <li class="hot">Iégislation proposée</li>
                <li>Iégislation proposée</li>
              </ul>
            </div>

            <div class="function_box">
              <button>
                <img src="@/assets/icons/icon_post.svg" alt="post">
              </button>
              <button>
                <img src="@/assets/icons/icon_msg.svg" alt="msg">
              </button>
              <button>
                <img src="@/assets/icons/icon_setting.svg" alt="setting">
              </button>
            </div>

            <div class="doc_list">
              <div class="doc_title">
                <h4>Document Partagé</h4>
                <img src="@/assets/icons/icon_comma.svg" alt="menu">
              </div>

              <div class="doc_list_content">
                <div class="circle" />
                <div class="list_content">
                  <h5>Nous avons reçu un projet de loi visant à promulguer des lois environnementales.</h5>
                  <span>
                    <img src="@/assets/icons/icon_time.svg" alt="time">
                    <p>29/12/23 17:12 PM</p>
                  </span>
                </div>
              </div>

              <div class="doc_list_content">
                <div class="circle" />
                <div class="list_content">
                  <h5>Nous avons reçu un projet de loi visant à promulguer des lois environnementales.</h5>
                  <span>
                    <img src="@/assets/icons/icon_time.svg" alt="time">
                    <p>29/12/23 17:12 PM</p>
                  </span>
                </div>
              </div>

              <div class="doc_list_content">
                <div class="circle" />
                <div class="list_content">
                  <h5>Nous avons reçu un projet de loi visant à promulguer des lois environnementales.</h5>
                  <span>
                    <img src="@/assets/icons/icon_time.svg" alt="time">
                    <p>29/12/23 17:12 PM</p>
                  </span>
                </div>
              </div>

              <div class="doc_list_content">
                <div class="circle" />
                <div class="list_content">
                  <h5>Nous avons reçu un projet de loi visant à promulguer des lois environnementales.</h5>
                  <span>
                    <img src="@/assets/icons/icon_time.svg" alt="time">
                    <p>29/12/23 17:12 PM</p>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="bottom">
          <img src="@/assets/images/img_ai.svg" alt="ai">
          <div>
            Site de I’ Assembleé<br>
            national de la République<br>
            du Sénégal
          </div>
        </div>
      </aside>

      <section>
        <article class="process">
          <div class="process_box">
            <h4>Acceptance</h4>
            <div data-type="divider" />
            <p>{{ "3" }}</p>
          </div>

          <img src="@/assets/icons/icon_process_arrow.svg" alt="arrow" data-type="arrow">

          <div class="process_box">
            <h4>Acceptance</h4>
            <div data-type="divider" />
            <p>{{ "3" }}</p>
          </div>

          <img src="@/assets/icons/icon_process_arrow.svg" alt="arrow" data-type="arrow">

          <div class="process_box selected">
            <h4>Acceptance</h4>
            <div data-type="divider" />
            <p>{{ "3" }}</p>
          </div>

          <img src="@/assets/icons/icon_process_arrow.svg" alt="arrow" data-type="arrow">

          <div class="process_box">
            <h4>Acceptance</h4>
            <div data-type="divider" />
            <p>{{ "3" }}</p>
          </div>

          <img src="@/assets/icons/icon_process_arrow.svg" alt="arrow" data-type="arrow">

          <div class="process_box">
            <h4>Acceptance</h4>
            <div data-type="divider" />
            <p>{{ "3" }}</p>
          </div>
        </article>

        <article class="schedule">
          <VCalendar
              locale="es"
              hide-week-number="false"
          />

          <v-card>
            <v-tabs
                v-model="model"
                align-tabs="left"
                color="primary"
            >
              <v-tab
                v-for="i in 3"
                :key="i"
                :text="`Item ${i}`"
                :value="i"
              ></v-tab>
            </v-tabs>

            <v-tabs-window v-model="model">
              <v-tabs-window-item
                v-for="i in 3"
                :key="i"
                :value="i"
              >
                <v-card>
                  <v-table>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Calories
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in desserts"
                        :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                    </tbody>
                  </v-table>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card>

        </article>

        <article class="research">
          <div class="left">
            <h4>Rechercher Loi</h4>

            <div class="content">
              <div class="input_group">
                <label class="circle">제안대수</label>
                <v-select
                    density="compact"
                    hide-details
                    variant="outlined"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-select>
                <span class="space">~</span>
                <v-select
                    density="compact"
                    hide-details
                    variant="outlined"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-select>
              </div>

              <div class="input_group">
                <label class="circle">의안종류/처리</label>
                <v-select
                    density="compact"
                    hide-details
                    variant="outlined"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-select>
                <span class="space"></span>
                <v-select
                    density="compact"
                    hide-details
                    variant="outlined"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-select>
              </div>

              <div class="input_group">
                <label class="circle">발의자/제안자</label>
                <v-select
                    density="compact"
                    hide-details
                    variant="outlined"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    class="mr24"
                ></v-select>
                <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                ></v-text-field>
              </div>

              <div class="input_group">
                <label class="circle">의안번호</label>
                <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                ></v-text-field>
              </div>

              <div class="input_group">
                <label class="circle">의안명</label>
                <v-select
                    density="compact"
                    hide-details
                    variant="outlined"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                ></v-select>
              </div>

              <div class="search_wrap">
                <button class="search">검색</button>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="title_wrap">
              <h4>annonce</h4>
              <img src="@/assets/icons/icon_comma.svg" alt="menu">
            </div>

            <ul>
              <li>
                <h6>Calendrier de la conférence de presse (11e, mercredi)</h6>
                <div class="date">
                  <img src="@/assets/icons/icon_time.svg" alt="time">
                  <p>29/12/2023</p>
                </div>
              </li>

              <div data-line="divider" />

              <li>
                <h6>Calendrier de la conférence de presse (11e, mercredi)</h6>
                <div class="date">
                  <img src="@/assets/icons/icon_time.svg" alt="time">
                  <p>29/12/2023</p>
                </div>
              </li>

              <div data-line="divider" />

              <li>
                <h6>Calendrier de la conférence de presse (11e, mercredi)</h6>
                <div class="date">
                  <img src="@/assets/icons/icon_time.svg" alt="time">
                  <p>29/12/2023</p>
                </div>
              </li>

              <div data-line="divider" />

              <li>
                <h6>Calendrier de la conférence de presse (11e, mercredi)</h6>
                <div class="date">
                  <img src="@/assets/icons/icon_time.svg" alt="time">
                  <p>29/12/2023</p>
                </div>
              </li>

              <div data-line="divider" />

              <li>
                <h6>Calendrier de la conférence de presse (11e, mercredi)</h6>
                <div class="date">
                  <img src="@/assets/icons/icon_time.svg" alt="time">
                  <p>29/12/2023</p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: 'tab-2',
      desserts: [
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

</style>