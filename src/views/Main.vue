<style lang="less">
    @import "./main.less";
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
    	<div style='width:100%;height:45px;background-color:#3b3846'>
			<div class="main-header" style="height:45px;background-color:#3b3846">
				<div slot="top" class="logo-con" style="text-align:left;padding:5px 18px 8px;">
                    <img v-show="!shrink" style='width:140px;' src="../images/logo.png" key="max-logo" />
                    <img v-show="shrink" src="../images/logo-min.png" key="min-logo" />
                </div>
				<div class="header-avator-con">
					<full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
					<lock-screen></lock-screen>
					<message-tip v-model="mesCount"></message-tip>
					<theme-switch></theme-switch>
					<div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                <a href="javascript:void(0)">
                                    <span class="main-user-name">{{ userName }}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                        </Row>
                    </div>
				</div>
			</div>
		</div>
        <div class="sidebar-menu-con" style="margin-top:45px;" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <shrinkable-menu 
                :shrink="shrink"
                @on-change="handleSubmenuChange"
                :theme="menuTheme" 
                :before-push="beforePush"
                :open-names="openedSubmenuArr"
                :menu-list="menuList">
				<div slot="top">
					<div class="navicon-con" style="text-align:right">
						<button type="button" class="ivu-btn ivu-btn-text" style="transform: rotateZ(0deg);" @click="toggleClick">
							<span><i class="ivu-icon ivu-icon-navicon" style="font-size: 32px;"></i></span>
						</button>
					</div>
				</div>
            </shrinkable-menu>
        </div>
        <div class="main-header-con" style="z-index：0;height:38px;" :style="{paddingLeft: shrink?'60px':'200px'}">
            <div class="tags-con">
                <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
            </div>
			<!--<div class="header-middle-con">
				<div class="main-breadcrumb">
					<breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
				</div>
			</div>-->
        </div>
        <div class="single-page-con" style="top:85px;" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive :include="cachePage">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
	import shrinkableMenu from './components/shrinkable-menu/shrinkable-menu.vue';
	import tagsPageOpened from './components/tags-page-opened.vue';
	import breadcrumbNav from './components/breadcrumb-nav.vue';
	import fullScreen from './components/full-screen.vue';
	import lockScreen from './components/lock-screen/lockscreen.vue';
	import messageTip from './components/message-tip.vue';
	import themeSwitch from './components/theme-switch/theme-switch.vue';
	import Cookies from 'js-cookie';
	import util from '@/libs/utils/util.js';
    
	export default {
		components: {
			shrinkableMenu,
			tagsPageOpened,
			breadcrumbNav,
			fullScreen,
			lockScreen,
			messageTip,
			themeSwitch
		},
		data () {
			return {
				shrink: false,
				userName: '',
				isFullScreen: false,
				openedSubmenuArr: this.$store.state.app.openedSubmenuArr
			};
		},
		computed: {
			menuList () {
				return this.$store.state.app.menuList;
			},
			pageTagsList () {
				return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
			},
			currentPath () {
				return this.$store.state.app.currentPath; // 当前面包屑数组
			},
			avatorPath () {
				return localStorage.avatorImgPath;
			},
			cachePage () {
				return this.$store.state.app.cachePage;
			},
			lang () {
				return this.$store.state.app.lang;
			},
			menuTheme () {
				return this.$store.state.app.menuTheme;
			},
			mesCount () {
				return this.$store.state.app.messageCount;
			}
		},
		methods: {
			init () {
				let pathArr = util.setCurrentPath(this, this.$route.name);
				this.$store.commit('updateMenulist');
				if (pathArr.length >= 2) {
					this.$store.commit('addOpenSubmenu', pathArr[1].name);
				}
				this.userName = Cookies.get('user');
				let messageCount = 3;
				this.messageCount = messageCount.toString();
				this.checkTag(this.$route.name);
				this.$store.commit('setMessageCount', 3);
			},
			toggleClick () {
				this.shrink = !this.shrink;
			},
			handleClickUserDropdown (name) {
				if (name === 'ownSpace') {
					util.openNewPage(this, 'ownspace_index');
					this.$router.push({
						name: 'ownspace_index'
					});
				} else if (name === 'loginout') {
					// 退出登录
					this.$store.commit('logout', this);
					this.$store.commit('clearOpenedSubmenu');
					this.$router.push({
						name: 'login'
					});
				}
			},
			checkTag (name) {
				let openpageHasTag = this.pageTagsList.some(item => {
				if (item.name === name) {
						return true;
					}
				});
				if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
					util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
				}
			},
			handleSubmenuChange (val) {},
			beforePush (name) {
				return true;
			},
			fullscreenChange (isFullScreen) {}
        },
		watch: {
			'$route' (to) {
				this.$store.commit('setCurrentPageName', to.name);
				let pathArr = util.setCurrentPath(this, to.name);
				// if (pathArr.length > 2) {
				// 	this.$store.commit('addOpenSubmenu', pathArr[1].name);
				// }
				this.checkTag(to.name);
				localStorage.currentPageName = to.name;
			},
			lang () {
				util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
			}
		},
		mounted () {
			this.init();
		},
		created () {
			this.$store.commit('setOpenedList');
		}
	};
</script>
