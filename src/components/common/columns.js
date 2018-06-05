/**
 * Created by liangshuang on 18/6/4.
 */
import currency from '../../utils/currency'
const orderBaseColumns = [
    {
        title:'订单编号',
        dataIndex:'applicationCode'
    },
    {
        title:'商务经理',
        dataIndex:'commericalManagerName'
    },
    {
        title:'项目代码',
        dataIndex:'projectCode'
    },
    {
        title:'项目名称',
        dataIndex:'projectName'
    },
    {
        title:'申请部门',
        dataIndex:'sbuName'
    },
    {
        title:'技术合作种类',
        dataIndex:'techCoopApplyTypeName'
    },
    {
        title:'技术合作商类型',
        dataIndex:'techCoopTypeName'
    },
    {
        title:'技术合作商名称',
        dataIndex:'techCoopName'
    },
    {
        title:'服务开始时间',
        dataIndex:'serviceBeginDate'
    },
    {
        title:'服务结束时间',
        dataIndex:'serviceEndDate'
    },
    {
        title:'币种',
        dataIndex:'applicationCode'
    },
    {
        title:'签约方',
        dataIndex:'contractingPartyName'
    },
    {
        title:'是否BG间调用',
        dataIndex:'bgFlagName'
    },
]
const orderPayInfoColumns = [
    {
        title:'技术合作订单金额',
        dataIndex:'orderAmount',
        render: (text) => (text ? currency(text) :currency(0))
    },
    {
        title:'备注',
        dataIndex:'REMARKS',
        className:'remark-container'
    },
]
const OrderProBaseColumns = [
    {
        title:'合同申请单编号',
        dataIndex:'applicationCode'
    },
    {
        title:'申请部门',
        dataIndex:'applyBu'
    },
    {
        title:'申请日期',
        dataIndex:'applyDate'
    },
    {
        title:'是否提前立项',
        dataIndex:'isProjectAdvance'
    },
    {
        title:'区域－大区',
        dataIndex:'largeArea'
    },
    {
        title:'项目代码',
        dataIndex:'projectCode'
    },
    {
        title:'项目名称',
        dataIndex:'projectName'
    },
    {
        title:'分包预算币种',
        dataIndex:'currency'
    },
    {
        title:'分包预算',
        dataIndex:'subcontractBudget',
        render: (text) => (text ? currency(text) :currency(0))
    },
    {
        title:'销售合同是否允许技术合作',
        dataIndex:'isTechnicalCooperation'
    },
    {
        title:'预计技术合作内容',
        dataIndex:'technicalCooperationContent'
    },
    {
        title:'技术合作原因',
        dataIndex:'technicalCooperationReason'
    },
    {
        title:'签约性质',
        dataIndex:'contractualBasis'
    },
    {
        title:'申请人',
        dataIndex:'createName'
    },
    {
        title:'是否BG间调用',
        dataIndex:'bgFlagName'
    },
]
const orderProClass2Columns = [
    {
        title:'技术合作申请种类',
        dataIndex:'',
        default:'技术合作-II(人员类)',
    },
    {
        title:'技术合作人员数量',
        dataIndex:'technicalCooperationNum',
    },
    {
        title:'预计技术合作时成本',
        dataIndex:'outCost',
        render: (text) => (text ? currency(text) :currency(0))
    },
]
const orderProClass1Columns = [
    {
        title:'技术合作申请种类',
        dataIndex:'',
        default:'技术合作-I(技术类)',
    },
    {
        title:'合作类型',
        dataIndex:'technicalCooperationChild',
        render: (text) => (text===1 ? '委托开发' : '技术合作')
    },
    {
        title:'预计技术合作时成本',
        dataIndex:'outCost',
        render: (text) => (text ? currency(text) :currency(0))
    },
]
const orderProTechColumns = [
    {
        title:'技术合作服务周期开始日期',
        dataIndex:'serviceBeginTime',
    },
    {
        title:'技术合作服务周期结束日期',
        dataIndex:'serviceEndTime',
    },
    {
        title:'技术合作商类型',
        dataIndex:'teachTypeName',
    },
    {
        title:'是否客户推荐技术合作商',
        dataIndex:'isRecommendedPartyName',
    },
    {
        title:'技术合作商名称',
        dataIndex:'teachname'
    },
]
const OrderNoProBaseColumns = [
    {
        title:'合同申请单编号',
        dataIndex:'applicationCode'
    },
    {
        title:'项目名称',
        dataIndex:'projectName'
    },
    {
        title:'成本中心',
        dataIndex:'costcenterId'
    },
    {
        title:'区域－大区',
        dataIndex:'largeArea'
    },
    {
        title:'申请公司',
        dataIndex:'applyCompany'
    },
    {
        title:'申请日期',
        dataIndex:'applyDate'
    },
    {
        title:'签约性质',
        dataIndex:'contractualBasis'
    },
    {
        title:'申请人',
        dataIndex:'createName'
    },
    {
        title:'是否BG间调用',
        dataIndex:'bgFlagName'
    },
    {
        title:'预计技术合作内容',
        dataIndex:'technicalCooperationContent'
    },
    {
        title:'技术合作原因',
        dataIndex:'technicalCooperationReason'
    },
    ]
const budgetApplyColumns = [
    {
        title: '基本信息',
        children:[
            {
                title: '项目编码',
                dataIndex: 'projectCode'
            },
            {
                title: '项目名称',
                dataIndex: 'projectName'
            },
            {
                title: '项目经理',
                dataIndex: 'managerName'
            },
            {
                title: 'BU',
                dataIndex: 'projectSbu'
            },
            {
                title: '区域',
                dataIndex: 'area'
            },
            {
                title: '合同额',
                dataIndex: 'contractMoney',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '净销售额',
                dataIndex: 'netOrder',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: 'C-FORM GM',
                dataIndex: 'cformGM',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '本版GM',
                dataIndex: 'proGM'
            },
            {
                title: '实施费用／NetOrder',
                dataIndex: 'costNetRate'
            },
            {
                title: '项目版本号',
                dataIndex: 'editVer'
            }
        ]
    },
    {
        title:'预算信息',
        children:[
            {
                title: '人天（工程)',
                dataIndex: 'laborDayEdit',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '实施（工程)',
                dataIndex: 'costEdit',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '培训',
                dataIndex: 'pxEdit',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '外包',
                dataIndex: 'wbEdit',
                render: (text) => (text ? currency(text) : currency(0))
            }
        ]
    }
]
const budgetchangeColumns = [
    {
        title: '基本信息',
        children:[
            {
                title: '项目编码',
                dataIndex: 'projectCode'
            },
            {
                title: '项目名称',
                dataIndex: 'projectName'
            },
            {
                title: '项目经理',
                dataIndex: 'managerName'
            },
            {
                title: 'BU',
                dataIndex: 'projectSbu'
            },
            {
                title: '区域',
                dataIndex: 'area'
            },
            {
                title: '合同额',
                dataIndex: 'contractMoney',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '净销售额',
                dataIndex: 'netOrder',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: 'C-FORM GM',
                dataIndex: 'cformGM',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '本版GM',
                dataIndex: 'proGM'
            },
            {
                title: '实施费用／NetOrder',
                dataIndex: 'costNetRate'
            },
            {
                title: '项目版本号',
                dataIndex: 'editVer'
            }
        ]
    },
    {
        title:'预算信息',
        children:[
            {
                title: '人天（工程)',
                dataIndex: 'laborDayEdit',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '实施（工程)',
                dataIndex: 'costEdit',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '培训',
                dataIndex: 'pxEdit',
                render: (text) => (text ? currency(text) : currency(0))
            },
            {
                title: '外包',
                dataIndex: 'wbEdit',
                render: (text) => (text ? currency(text) : currency(0))
            }
        ]
    },
    {
        title:'上版（）预算及本版偏差：数值／偏差／偏差率',
        children:[
            {
                title:'人天（工程)',
                dataIndex:'laborDayBase',
                render: (text) => (text ? currency(text) :currency(0))
            },
            {
                title:'实施（工程)',
                dataIndex:'costBase',
                render: (text) => (text ? currency(text) :currency(0))
            },
            {
                title:'培训',
                dataIndex:'pxBase',
                render: (text) => (text ? currency(text) :currency(0))
            },
            {
                title:'外包',
                dataIndex:'wbBase',
                render: (text) => (text ? currency(text) :currency(0))
            },
        ]
    },
    {
        title:'上一版（）预算及本版偏差：数值／偏差／偏差率',
        children:[
            {
                title:'人天（工程)',
                dataIndex:'laborDayUp',
                render: (text) => (text ? currency(text) :currency(0))
            },
            {
                title:'实施（工程)',
                dataIndex:'costUp',
                render: (text) => (text ? currency(text) :currency(0))
            },
            {
                title:'培训',
                dataIndex:'pxUp',
                render: (text) => (text ? currency(text) :currency(0))
            },
            {
                title:'外包',
                dataIndex:'wbUp',
                render: (text) => (text ? currency(text) :currency(0))
            },
        ]
    },
    {
        title:'里程碑信息',
        children:[
            {
                title:'里程碑偏差比较',
                dataIndex:'delayAc',
                render: (text) => (text ? currency(text) :currency(0))
            },
            {
                title:'里程碑偏差比较',
                dataIndex:'delayAb',
                render: (text) => (text ? currency(text) :currency(0))
            },
        ]
    },

]
export {
    orderBaseColumns,
    orderPayInfoColumns,
    OrderProBaseColumns,
    orderProClass2Columns,
    orderProClass1Columns,
    orderProTechColumns,
    OrderNoProBaseColumns,
    budgetApplyColumns,
    budgetchangeColumns
}
