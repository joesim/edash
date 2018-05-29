<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
        prepend-icon="desktop_windows"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Screening</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>desktop_windows</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list-group>
        <v-list-group
        prepend-icon="location_searching"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Detection</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>desktop_windows</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list-group>
        <v-list-group
        prepend-icon="perm_data_setting"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Equipment</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>desktop_windows</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list-group>
        <v-list-group
        prepend-icon="find_in_page"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Reports</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>desktop_windows</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list-group>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>access_time</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>When</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-layout column class="pl-4" style="    margin-top: -20px;
    margin-bottom: 20px;">
        <v-layout row>
          <div>
            <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Start date"
          prepend-icon="event"
          readonly
          hide-details
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
          </div>
          <div>
            To
          </div>
        </v-layout>
        <v-layout row>
          <div>
            <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="End date"
          prepend-icon="event"
          readonly
          hide-details
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
          </div>
          <div>
            
          </div>
        </v-layout>
      </v-layout>
      <v-divider />
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>location_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Where</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-stepper v-model="e6" vertical style="margin-left:10px">
    <v-stepper-step :complete="e6 > 1" step="1" style="margin-top:-15px">
      Airport
      <small></small>
    </v-stepper-step>
    <v-stepper-content step="1">
      
      
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 2" step="2">Terminal</v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e6 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 3" step="3">Checkpoint</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="4">Lane</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e6 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      color="white"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!--<v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>-->
      <v-toolbar-title><img style="width:200px;margin-top:10px" src="https://widgetbrain.com/site/wp-content/uploads/2018/02/Vanderlande-logo.jpg" /></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn style="margin-right:30px" @click.stop="fixed = !fixed">
        Login
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import VueRangeDatePicker from 'vue-rangedate-picker'

export default {
  components: {
    VueRangeDatePicker
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Overview'
      },
      {
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vanderlande'
    }
  },
  name: 'App'
}
</script>

<style>
.stepper, .stepper__header {
    -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,0), 0 2px 2px 0 rgba(0,0,0,0), 0 1px 5px 0 rgba(0,0,0,0);
    box-shadow: 0 3px 1px -2px rgba(0,0,0,0), 0 2px 2px 0 rgba(0,0,0,0), 0 1px 5px 0 rgba(0,0,0,0);
}
</style>

