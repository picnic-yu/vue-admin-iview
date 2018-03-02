export function transformData(listItem, lookUpArr, codeKey, textKey) {
	if(!lookUpArr) return;
	lookUpArr.forEach((value) => {
		if(listItem[codeKey] == value.code) {
			listItem[textKey] = value.value;
		}
	});
};
export let lookUpdata = {
	"OrderTypeLookup": [{
		"code": "L",
		"value": "租赁订单"
	}, {
		"code": "NC",
		"value": "非合约机订单"
	}, {
		"code": "NL",
		"value": "非租赁订单"
	}],
	"CustomerTypeLookup": [{
		"code": "EM",
		"value": "设备制造商"
	}, {
		"code": "LC",
		"value": "租赁公司"
	}, {
		"code": "PC",
		"value": "生产厂商"
	}],
	"OrderStatusLookup": [{
			"code": "DISPATCHING",
			"value": "派工中"
		}, {
			"code": "FINISH",
			"value": "已完成"
		}, {
			"code": "UNCONFIRMED",
			"value": "待确认"
        }, {
            "code": "UNCONFIGURED",
            "value": "待配置"
        },
		{
			"code": "UNDISPATCH",
			"value": "待派工"
		}, {
			"code": "UNSHIPPING",
			"value": "待出货"
		}
	],
	"ApplicationStatusLookup": [{
		"code": "COMPLETED",
		"value": "已处理"
	}, {
		"code": "PENDING",
		"value": "待处理"
	}, {
		"code": "UNCONFIRMED",
		"value": "待确认"
	}],
	"DispatchTypeLookup": [{
			"code": "INSTALLED",
			"value": "装机"
		}, {
			"code": "MAINTAIN",
			"value": "维修"
		},
		{
			"code": "SUPPORT",
			"value": "支援"
		}, {
			"code": "TRAINING",
			"value": "培训"
		}
	],
	"DispatchStateLookup": [{
		"code": "DISPATCHING",
		"value": "派工中"
	}, {
		"code": "FINISH",
		"value": "已完成"
	}, {
		"code": "UNCONFIRMED",
		"value": "待确认"
	}],
	"AgreementStatusLookup": [{
		"code": "EFFECTIVE",
		"value": "已生效"
	}, {
		"code": "EXPIRY",
		"value": "已失效"
	}, {
		"code": "UNEFFECTIVE",
		"value": "待生效"
	}],
	"CardTypeLookup": [{
		"code": "CANCELLATION",
		"value": "注销"
	}, {
		"code": "NORMAL",
		"value": "正常"
	}, {
		"code": "SAMPLE",
		"value": "白名单"
	}],
	"CarrierOperatorLookup": [{
		"code": "DX",
		"value": "电信"
	}, {
		"code": "LT",
		"value": "联通"
	}, {
		"code": "YD",
		"value": "移动"
	}],
	"SensorTypeLookup": [{
			"code": "FAILURE",
			"value": "故障"
		}, {
			"code": "NORMAL",
			"value": "正常"
		},
		{
			"code": "SAMPLE",
			"value": "样品"
		}, {
			"code": "SCRAP",
			"value": "报废"
		}
	],
	"ShipmentStateLookup": [{
		"code": "COMPLETED",
		"value": "已完成"
	}, {
		"code": "UNCONFIEM",
		"value": "待确认"
	}],
	"StockCategoryLookup": [{
		"code": "IOTCARD",
		"value": "物联卡"
	}, {
		"code": "SENSOR",
		"value": "传感器"
	}],
	"StockStateLookup": [{
		"code": "DELIVERY",
		"value": "出库"
	}, {
		"code": "LOCK",
		"value": "锁定"
	}, {
		"code": "STOCK",
		"value": "在库"
	}],
	"SensorModelLookup": [{
		"code": "MB130",
		"value": "MB130"
	}, {
		"code": "MB170",
		"value": "MB170"
	}],
	"SensorSeriesLookup": [{
		"code": "DS",
		"value": "设备动态传感器"
	}, {
		"code": "PS",
		"value": "PLC传感器"
	}, {
		"code": "VS",
		"value": "震动公用传感器"
	}],
	"CompanyIndustryLookup": [{
			"code": "1001",
			"value": "通用设备制造业"
		},
		{
			"code": "1002",
			"value": "家具制造业"
		},
		{
			"code": "1003",
			"value": "塑料制品业"
		},
		{
			"code": "1004",
			"value": "印刷和记录媒介复制业"
		},
		{
			"code": "1005",
			"value": "医药制造业"
		},
		{
			"code": "1006",
			"value": "橡胶制品业"
		},
		{
			"code": "1007",
			"value": "金属制品业"
		},
		{
			"code": "1008",
			"value": "专用设备制造业"
		},
		{
			"code": "1009",
			"value": "电气机械及器材制造业"
		},
		{
			"code": "1010",
			"value": "通信设备、计算机及其他电子设备制造业"
		},
		{
			"code": "1011",
			"value": "农副食品加工业"
		},
		{
			"code": "1012",
			"value": "食品制造业"
		},
		{
			"code": "1013",
			"value": "饮料制造业"
		},
		{
			"code": "1014",
			"value": "烟草制品业"
		},
		{
			"code": "1015",
			"value": "纺织业"
		},
		{
			"code": "1016",
			"value": "纺织服装、鞋、帽制品业"
		},
		{
			"code": "1017",
			"value": "皮革、毛皮、羽毛(绒)及其制品业"
		},
		{
			"code": "1018",
			"value": "木材加工及木、竹、藤、棕、草制品业"
		},
		{
			"code": "1019",
			"value": "造纸及纸制品业"
		},
		{
			"code": "1020",
			"value": "文教体育用品制造业"
		},
		{
			"code": "1021",
			"value": "石油加工、炼焦及核燃料加工业"
		},
		{
			"code": "1022",
			"value": "化学原料及化学制品制造业"
		},
		{
			"code": "1023",
			"value": "化学纤维制造业"
		},
		{
			"code": "1024",
			"value": "非金属矿物制造业"
		},
		{
			"code": "1025",
			"value": "黑色金属冶炼及压延加工业"
		},
		{
			"code": "1026",
			"value": "有色金属冶炼及压延加工业"
		},
		{
			"code": "1027",
			"value": "交通运输设备制造"
		},
		{
			"code": "1028",
			"value": "仪器仪表及文化、办公用品的制造"
		},
		{
			"code": "1029",
			"value": "工艺品及其他制造业"
		},
		{
			"code": "1030",
			"value": "废弃资源和废旧材料回收加工业"
		},
		{
			"code": "1031",
			"value": "环保工业"
		},
		{
			"code": "1032",
			"value": "污水治理设备制造"
		},
		{
			"code": "1033",
			"value": "贸易代理"
		},
		{
			"code": "1034",
			"value": "商业银行"
		},
		{
			"code": "1035",
			"value": "融资租赁"
		}
	],
	"EnterprisePropertyLookup": [{
			"code": "001",
			"value": "内资股份有限公司"
		}, {
			"code": "002",
			"value": "中外合资股份有限公司"
		},
		{
			"code": "003",
			"value": "外商独资股份有限公司"
		}, {
			"code": "004",
			"value": "内资有限责任公司"
		},
		{
			"code": "005",
			"value": "中外合资有限责任公司"
		}, {
			"code": "006",
			"value": "外商独资有限责任公司"
		}, {
			"code": "007",
			"value": "内资工商个体户"
		}
	],
	"StoreHouseLookup": [{
		"code": "SUZHOU",
		"value": "苏州"
	}],
	"OperateTypeLookup": [{
		"code": "WAREHOUSE",
		"value": "入库"
	}, {
		"code": "DELIVERY",
		"value": "出货"
	}, {
		"code": "DELETE",
		"value": "删除"
	}, {
		"code": "LOCK",
		"value": "锁定"
	}],
	"ShipmentFromTypeLookup": [{
		"code": "ORDER",
		"value": "订单"
	}, {
		"code": "TRIAL",
		"value": "试用单"
	},{
		"code": "SUPPORT",
		"value": "支援单"
	}, {
		"code": "DISPATCH",
		"value": "派工单"
	}],
	"ShipmentTypeLookup": [{
		"code": "ORDER",
		"value": "订单"
	},{
		"code": "DISPATCH",
		"value": "派工单"
	}],
	"PostageFlowLookup": [{
		"code": "30M",
		"value": "30M"
	}, {
		"code": "50M",
		"value": "50M"
	}, {
		"code": "100M",
		"value": "100M"
	}],
	"PriceApplicableLookup": [{
		"code": "ALL",
		"value": "通用"
	}, {
		"code": "LC",
		"value": "租赁公司"
	}, {
		"code": "EC",
		"value": "设备厂商"
	}, {
		"code": "PC",
		"value": "生产厂商"
	}],
	"SharePriceStatusLookup": [{
		"code": "O",
		"value": "无融合"
	}, {
		"code": "AB",
		"value": "租赁+供应商"
	}, {
		"code": "AC",
		"value": "租赁+生产厂商"
	}, {
		"code": "ABC",
		"value": "租赁+供应商+生产厂商"
	}],
	"SharePriceRatioLookup": [{
		"code": "1",
		"value": "100%"
	}, {
		"code": "0.75",
		"value": "75%"
	}, {
		"code": "0.65",
		"value": "65%"
	}],
	"PriceTermLookup": [{
		"code": "12",
		"value": "12"
	}, {
		"code": "13",
		"value": "13"
	}, {
		"code": "14",
		"value": "14"
	}, {
		"code": "15",
		"value": "15"
	}, {
		"code": "16",
		"value": "16"
	}, {
		"code": "17",
		"value": "17"
	}, {
		"code": "18",
		"value": "18"
	}, {
		"code": "19",
		"value": "19"
	}, {
		"code": "20",
		"value": "20"
	}, {
		"code": "21",
		"value": "21"
	}, {
		"code": "22",
		"value": "22"
	}, {
		"code": "23",
		"value": "23"
	}, {
		"code": "24",
		"value": "24"
	}, {
		"code": "25",
		"value": "25"
	}, {
		"code": "26",
		"value": "26"
	}, {
		"code": "27",
		"value": "27"
	}, {
		"code": "28",
		"value": "28"
	}, {
		"code": "29",
		"value": "29"
	}, {
		"code": "30",
		"value": "30"
	}, {
		"code": "31",
		"value": "31"
	}, {
		"code": "32",
		"value": "32"
	}, {
		"code": "33",
		"value": "33"
	}, {
		"code": "34",
		"value": "34"
	}, {
		"code": "35",
		"value": "35"
	}, {
		"code": "36",
		"value": "36"
	}, {
		"code": "37",
		"value": "37"
	}, {
		"code": "38",
		"value": "38"
	}, {
		"code": "39",
		"value": "39"
	}, {
		"code": "40",
		"value": "40"
	}, {
		"code": "41",
		"value": "41"
	}, {
		"code": "42",
		"value": "42"
	}, {
		"code": "43",
		"value": "43"
	}, {
		"code": "44",
		"value": "44"
	}, {
		"code": "45",
		"value": "45"
	}, {
		"code": "46",
		"value": "46"
	}, {
		"code": "47",
		"value": "47"
	}, {
		"code": "48",
		"value": "48"
	}],
	"PriceFrequencyLookup": [{
		"code": "15",
		"value": "15分钟"
	}, {
		"code": "30",
		"value": "30分钟"
	}, {
		"code": "60",
		"value": "1小时"
	}, {
		"code": "120",
		"value": "2小时"
	}],
	"CustomerComplaintsStatusLookup": [{
		"code": "ACCEPTED",
		"value": "已受理"
	}, {
		"code": "ACCEPTING",
		"value": "受理中"
	}],
	"SupportTypeLookup": [{
		"code": "BASEINSTALLATION",
		"value": "基本安装"
	}, {
		"code": "WAITINSTALLATION",
		"value": "待安装"
	}],
	"EquipmentModelLookup": [{
		"code": "Mb130",
		"value": "Mb130"
	}, {
		"code": "Mb170",
		"value": "Mb170"
	}],
	"SupportStatusLookup": [{
		"code": "LIVEDEMO",
		"value": "现场演示"
	},{
		"code": "TECHNICALTRAINING",
		"value": "技术培训"
	},{
		"code": "INSTALLATIONDEBUGGING",
		"value": "安装调试"
	},{
		"code": "TROUBLESHOOTING",
		"value": "故障处理"
	},{
		"code": "SYSTEMMAINTENANCE",
		"value": "系统维护"
	}],
	"EquipmentNameLookup": [{
		"code": "001",
		"value": "CNC加工中心"
	},{
		"code": "002",
		"value": "注塑机"
	},{
		"code": "003",
		"value": "压铸机"
	},{
		"code": "004",
		"value": "剪折锯机"
	},{
		"code": "005",
		"value": "线切割机"
	},{
		"code": "006",
		"value": "NCT激光切割机"
	},{
		"code": "007",
		"value": "其他传统机床"
	},{
		"code": "008",
		"value": "木工机"
	},{
		"code": "009",
		"value": "机械手臂"
	},{
		"code": "010",
		"value": "钻孔机"
	},{
		"code": "011",
		"value": "CT"
	},{
		"code": "012",
		"value": "MRI"
	},{
		"code": "013",
		"value": "X光"
	}],
}