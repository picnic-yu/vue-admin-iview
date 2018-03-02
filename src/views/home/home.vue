<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <Row :gutter="10">
            
            <Col :md="24" :lg="24">
            	<div class='card-title-wrap' >待办工作</div>
                <Row :gutter="5">
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="toBeConfirmed_count"
                            :end-val="count.toBeConfirmed"
                            iconType="clipboard"
                            :color="bgBlue"
                            intro-text="待确认订单"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="toConfigure_count"
                            :end-val="count.toConfigure"
                            iconType="gear-b"
                            :color="bgGreen"
                            :iconSize="50"
                            intro-text="待配置订单"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="pending_count"
                            :end-val="count.pending"
                            iconType="android-upload"
                            :color="bgYellow"
                            intro-text="待处理出货"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="forDispatching_count"
                            :end-val="count.forDispatching"
                            iconType="shuffle"
                            :color="bgRed"
                            intro-text="待处理派工"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="toBeComplaint_count"
                            :end-val="count.toBeComplaint"
                            iconType="android-textsms"
                            :color="bgBlue"
                            intro-text="待处理客诉"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="pendingComplaint_count"
                            :end-val="count.pendingComplaint"
                            iconType="settings"
                            :color="bgGreen"
                            intro-text="待处理装机"
                        ></infor-card>
                    </Col>
                </Row>
                <div class='card-title-wrap' >物料部门</div>
                <Row :gutter="5">
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="sensorInventory_count"
                            :end-val="count.sensorInventory"
                            iconType="ios-speedometer"
                            :color="bgBlue"
                            intro-text="传感器库存"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="cardInventory_count"
                            :end-val="count.cardInventory"
                            iconType="card"
                            :color="bgGreen"
                            :iconSize="50"
                            intro-text="物联卡库存"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="sensorOut_count"
                            :end-val="count.sensorOut"
                            iconType="android-upload"
                            :color="bgYellow"
                            intro-text="传感器出库"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="sensorIn_count"
                            :end-val="count.sensorIn"
                            iconType="android-download"
                            :color="bgRed"
                            intro-text="传感器入库"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="equipmentInTransit_count"
                            :end-val="count.equipmentInTransit"
                            iconType="earth"
                            :color="bgBlue"
                            :iconSize="50"
                            intro-text="设备在途数"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="dataCollectionToday_count"
                            :end-val="count.dataCollectionToday"
                            iconType="upload"
                            :color="bgGreen"
                            intro-text="今日数据采集量"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="theServiceCall_count"
                            :end-val="count.theServiceCall"
                            iconType="shuffle"
                            :color="bgYellow"
                            intro-text="今日服务调用量"
                        ></infor-card>
                    </Col>
                </Row>
                
                <div class='card-title-wrap' >装机部门</div>
                <Row :gutter="5">
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="first_count"
                            :end-val="count.first"
                            iconType="settings"
                            :color="bgBlue"
                            intro-text="今日已装机数"
                        ></infor-card>
                    </Col>
                    
                    <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                        <infor-card
                            id-name="second_count"
                            :end-val="count.second"
                            iconType="wrench"
                            :color="bgGreen"
                            intro-text="今日剩余装机数"
                        ></infor-card>
                    </Col>
                </Row>
            </Col>
        </Row>

    </div>
</template>
<script>
import cityData from './map-data/get-city-value.js';
import homeMap from './components/map.vue';
import dataSourcePie from './components/dataSourcePie.vue';
import visiteVolume from './components/visiteVolume.vue';
import serviceRequests from './components/serviceRequests.vue';
import userFlow from './components/userFlow.vue';
import countUp from './components/countUp.vue';
import inforCard from './components/inforCard.vue';
import mapDataTable from './components/mapDataTable.vue';
import toDoListItem from './components/toDoListItem.vue';

export default {
    name: 'home',
    components: {
        homeMap,
        dataSourcePie,
        visiteVolume,
        serviceRequests,
        userFlow,
        countUp,
        inforCard,
        mapDataTable,
        toDoListItem
    },
    data () {
        return {
            toDoList: [
                {
                    title: ''
                },
                {
                    title: ''
                },
                {
                    title: ''
                },
                {
                    title: ''       
                },
                {
                    title: ''
                }
            ],
            count: {
                toBeConfirmed:496,               //待确认订单
                toConfigure:78,                  //待配置订单
                pending:305,                     //待处理出货
                toBeComplaint:27,                //待处理客诉
                forDispatching:259,              //待处理派工
                pendingComplaint:12,             //待处理装机
                sensorInventory:4701,            //传感器库存
                cardInventory:34674,             //物联卡库存
                sensorOut:127,                   //传感器出库
                sensorIn:347,                    //传感器入库
                equipmentInTransit:627,          //设备在途数
                dataCollectionToday:59027,       //今日数据采集量
                theServiceCall:13467,            //今日服务调用量
                first:327,                       //今日已经装机数
                second:62,                       //今日剩余装机数

            },
            cityData: cityData,
            showAddNewTodo: false,
            newToDoItemValue: '',
            bgBlue:"#6fafcc",
            bgGreen:"#34bfa3",
            bgYellow:"#fec171",
            bgRed:"#F38181"

        };
    },
    computed: {
        avatorPath () {
            return localStorage.avatorImgPath;
        }
    },
    methods: {
        addNewToDoItem () {
            this.showAddNewTodo = true;
            //  rgb(63, 68, 74)

        },
        addNew () {
            if (this.newToDoItemValue.length !== 0) {
                this.toDoList.unshift({
                    title: this.newToDoItemValue
                });
                setTimeout(() => {
                    this.newToDoItemValue = '';
                }, 200);
                this.showAddNewTodo = false;
            } else {
                this.$Message.error('请输入待办事项内容');
            }
        },
        cancelAdd () {
            this.showAddNewTodo = false;
            this.newToDoItemValue = '';
        }
    }
};
</script>
