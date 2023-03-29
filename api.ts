import { post } from '@/server'
interface BillingParams {
  billing_month:string, //账单年月
  cloudResourceInformations:Array<any>, //组件云资源信息
  customizePurchasingInformations:Array<any>, //定制化采买
  gameServerCostReqs:Array<any>, //游戏服务器成本
  id:number, //解决方案配置单自增id
  is_active:number, //是否有效(0为全部,1无效,2为有效)
  laborInformations:Array<any>, //人力投入
  product_id:string, //游戏ID
  projects_id:string, //项目ID
  solution_configuration_code:string, //配置单单号-版本号
  status:number, //0为全部,1草稿,2为已提交false  
}

interface BillingDetailParams {
  id:number, //账单自增id
  settlement_mode:number, //结算方式(1为业务向,2为中台向)false  
}

interface BillingListParams {
  begin_time:string, //开始时间(账单月份) 时间格式必须是2006-01
  customer_name:string, //工作室名称
  customer_name_cn:string, //签约开发商名称(中文)
  customer_name_en:string, //签约开发商名称(英文)
  end_time:string, //开始时间(账单月份) 时间格式必须是2006-01
  is_active:number, //是否有效(0为全部,1无效,2为有效)
  product_id:string, //游戏id
  product_name:string, //游戏名称
  product_name_cn:string, //游戏名称(中文)
  product_name_en:string, //游戏名称(英文)
  projects_name:string, //项目名称
  status:number, //账单状态(1为草稿,2为已提交)false  
}

interface BillingServiceProductOrgListParams {
  component_type:number, //交付组件类型(枚举: 1 组件云资源,2 人力投入,3 软件(Saas)服务)
  delivery_configuration_code:string, //交付清单单号-版本号
  delivery_configuration_id:number, //交付清单自增idfalse  
}

interface BusinessInformationParams {
  business_type:string, //业务类型名称
  business_type_id:string, //业务类型
  customer_id:string, //签约开发商id
  customer_name_cn:string, //签约开发商名称(中文)
  customer_name_en:string, //签约开发商名称(英文)
  id:number, //业务信息ID
  product_id:string, //游戏id
  product_name_cn:string, //游戏名称(中文)
  product_name_en:string, //游戏名称(英文)false  
}

interface BusinessInformationDetailParams {
  id:number, //业务信息IDfalse  
}

interface BusinessInformationListParams {
  business_type_id:string, //业务类型
  customer_id:string, //签约开发商id
  customer_name:string, //签约开发商名称
  customer_name_cn:string, //签约开发商名称(中文)
  customer_name_en:string, //签约开发商名称(英文)
  fuzzy_query_multifield:string, //多字段模糊查询内容(如果是不确定字段的模糊查询,请将具体内容放在这个字段,其他字段为空)
  product_id:string, //undefined
  product_name:string, //游戏名称
  product_name_cn:string, //游戏名称(中文)
  product_name_en:string, //游戏名称(英文)false  
}

interface DeliveryConfigurationParams {
  deliveryItems:Array<any>, //新建交付组件
  id:number, //交付清单自增id
  is_active:number, //是否有效(0为全部,1无效,2为有效)
  product_id:string, //业务信息ID
  projects_id:string, //项目id
  solution_configuration_code:string, //解决方案配置单单号-版本号
  state:number, //0为全部,1草稿,2为已提交false  
}

interface DeliveryConfigurationComponentListParams {
  component_name:string, //交付组件名称
  component_type:number, //交付组件类型(枚举: 1 组件云资源,2 人力投入,3 软件(Saas)服务)
  delivery_configuration_code:string, //交付清单单号-版本号
  delivery_configuration_id:number, //交付清单自增id
  service_product_org:string, //服务子项中台false  
}

interface DeliveryConfigurationDeliveryItemListParams {
  component_name:string, //交付组件名称
  component_type:number, //交付组件类型(枚举: 1 组件云资源,2 人力投入,3 软件(Saas)服务)
  delivery_configuration_code:string, //交付清单单号-版本号
  delivery_configuration_id:number, //交付清单自增id
  service_product_org:string, //服务子项中台false  
}

interface DeliveryConfigurationDetailParams {
  delivery_configuration_no:string, //交付清单单号
  id:number, //业务信息ID
  is_update:boolean, //是否是修改
  version:string, //版本号false  
}

interface DeliveryConfigurationListParams {
  customer_name:string, //工作室名称
  customer_name_cn:string, //签约开发商名称(中文)
  customer_name_en:string, //签约开发商名称(英文)
  delivery_configuration_name:string, //交付清单名称
  delivery_configuration_no:string, //交付清单单号
  is_active:number, //是否有效(0为全部,1无效,2为有效)
  product_name:string, //游戏名称
  product_name_cn:string, //游戏名称(中文)
  product_name_en:string, //游戏名称(英文)
  solution_configuration_code:string, //解决配置单单号-版本号,例POM20210907001-V1
  state:number, //交付清单状态(1为草稿,2为已提交)false  
}

interface ProductParams {
  customerId:string, //工作室id
  id:number, //业务信息ID
  productId:string, //游戏id
  productNameCn:string, //游戏名称(英文)
  productNameEn:string, //游戏名称(中文)false  
}

interface ProjectsParams {
  expected_delivery_date:string, //交付时间
  id:number, //项目自增ID
  priority:number, //优先级(1为高,2为中,3为低)
  product_id:string, //关联业务信息表
  projects_description:string, //项目描述
  projects_name:string, //项目名称
  projects_primary_contact:string, //项目主要负责人
  projects_state:number, //项目状态 ProjectsState 表id
  projects_team:string, //项目团队成员
  solution_no:string, //解决方案配置单号+版本号 例: CPQ20210901001-V1,CPQ20210901002-V1false  
}

interface ProjectsDetailParams {
  id:number, //项目自增id
  projectsId:string, //项目IDfalse  
}

interface ProjectsListParams {
  customer_name:string, //签约开发商名称
  customer_name_cn:string, //签约开发商名称(中文)
  customer_name_en:string, //签约开发商名称(英文)
  fuzzy_query_multifield:string, //多字段模糊查询内容(如果是不确定字段的模糊查询,请将具体内容放在这个字段,其他字段为空)
  is_binding_solution:number, //是否绑定配置单(0为全部,1为已绑定,2位未绑定)
  product_id:string, //游戏id
  product_name:string, //游戏名称
  product_name_cn:string, //游戏名称(中文)
  product_name_en:string, //游戏名称(英文)
  projects_id:string, //项目ID
  projects_name:string, //项目名称false  
}

interface ServiceProductParams {
  id:string, //undefined
  service_product_business:number, //服务子项业务
  service_product_category:number, //服务子项类别
  service_product_cost_type:number, //服务子项成本类型
  service_product_description:string, //服务子项描述
  service_product_name:string, //服务子项名称
  service_product_org:number, //服务子项中台
  service_product_owner:string, //服务子项负责人
  service_product_tag:string, //服务子项标签
  service_product_type:number, //服务子项类型false  
}

interface ServiceProductDetailParams {
  id:number, //业务信息IDfalse  
}

interface ServiceProductListParams {
  fuzzy_query_multifield:string, //多字段模糊查询内容(如果是不确定字段的模糊查询,请将具体内容放在这个字段,其他字段为空)
  service_product_business_id:number, //服务子项业务ID
  service_product_category_id:number, //服务子项类别ID
  service_product_cost_type_id:number, //服务子项成本类型ID
  service_product_id:string, //服务子项id
  service_product_name:string, //服务子项名称
  service_product_org_id:number, //服务子项中台ID
  service_product_type_id:number, //服务子项类型IDfalse  
}

interface SolutionConfigurationParams {
  id:number, //解决方案配置单自增id
  is_active:number, //是否有效(0为全部,1无效,2为有效)
  ocSolutionServiceProducts:Array<any>, //服务子项
  product_id:string, //业务信息ID
  solution_configuration_name:string, //解决方案配置名称
  state:number, //0为全部,1草稿,2为已提交false  
}

interface SolutionConfigurationDetailParams {
  id:number, //解决方案配置单自增id
  is_other:boolean, //是否要返回配置单服务子项(其他这个特殊服务子项)
  product_id:string, //游戏id
  solution_configuration_no:string, //解决方案配置单号
  version:string, //配置单版本false  
}

interface SolutionConfigurationListParams {
  customer_name:string, //工作室名称
  customer_name_cn:string, //签约开发商名称(中文)
  customer_name_en:string, //签约开发商名称(英文)
  delivery_configuration_code:string, //关联交付清单号
  fuzzy_query_multifield:string, //多字段模糊查询内容(如果是不确定字段的模糊查询,请将具体内容放在这个字段,其他字段为空)
  is_active:number, //是否有效(0为全部,1无效,2为有效)
  is_binding:number, //是否绑定项目(0为全部,1为已绑定,2位未绑定)
  is_binding_delivery:number, //是否绑定交付清单(0为全部,1为已绑定,2位未绑定)
  product_id:string, //游戏id
  product_name:string, //游戏名称
  product_name_cn:string, //游戏名称(中文)
  product_name_en:string, //游戏名称(英文)
  projects_id:string, //项目ID
  projects_id_like:string, //项目ID模糊查询
  solution_configuration_name:string, //解决方案配置名称
  solution_configuration_no:string, //解决方案配置单号
  state:number, //配置单状态(1为草稿,2为已提交)false  
}

interface V2ProjectsListParams {
  gameId:string, //游戏id
  pageNum:number, //页数
  pageSize:number, //每页条数
  search:string, //项目名称false  
}


export default {
   /*
    * 创建/编辑账单管理  
    * type: post
    * parammeters: 有请求参数
    */
    billing: (billingParams: BillingParams) => {
        return post('/billing', billingParams);
    },

   /*
    * 账单所需枚举列表  
    * type: post
    * parammeters: 无请求参数
    */
    billingBillEnumerationList: () => {
        return post('/billing/bill_enumeration_list', {});
    },

   /*
    * 账单管理详情  
    * type: post
    * parammeters: 有请求参数
    */
    billingDetail: (billingDetailParams: BillingDetailParams) => {
        return post('/billing/detail', billingDetailParams);
    },

   /*
    * 账单管理列表  
    * type: post
    * parammeters: 有请求参数
    */
    billingList: (billingListParams: BillingListParams) => {
        return post('/billing/list', billingListParams);
    },

   /*
    * 中台列表  
    * type: post
    * parammeters: 有请求参数
    */
    billingServiceProductOrgList: (billingServiceProductOrgListParams: BillingServiceProductOrgListParams) => {
        return post('/billing/service_product_org_list', billingServiceProductOrgListParams);
    },

   /*
    * 创建/编辑业务信息  
    * type: post
    * parammeters: 有请求参数
    */
    businessInformation: (businessInformationParams: BusinessInformationParams) => {
        return post('/business_information', businessInformationParams);
    },

   /*
    * 删除业务信息数据  
    * type: get
    * parammeters: 无请求参数
    */
    businessInformationDelete: () => {
        return post('/business_information/delete', {});
    },

   /*
    * 业务信息详情  
    * type: post
    * parammeters: 有请求参数
    */
    businessInformationDetail: (businessInformationDetailParams: BusinessInformationDetailParams) => {
        return post('/business_information/detail', businessInformationDetailParams);
    },

   /*
    * 业务信息列表  
    * type: post
    * parammeters: 有请求参数
    */
    businessInformationList: (businessInformationListParams: BusinessInformationListParams) => {
        return post('/business_information/list', businessInformationListParams);
    },

   /*
    * 创建/业务类型  
    * type: post
    * parammeters: 无请求参数
    */
    businessType: () => {
        return post('/business_type', {});
    },

   /*
    * 删除业务类型数据  
    * type: get
    * parammeters: 无请求参数
    */
    businessTypeDelete: () => {
        return post('/business_type/delete', {});
    },

   /*
    * 业务类型详情  
    * type: get
    * parammeters: 无请求参数
    */
    businessTypeDetail: () => {
        return post('/business_type/detail', {});
    },

   /*
    * 业务类型列表  
    * type: post
    * parammeters: 无请求参数
    */
    businessTypeList: () => {
        return post('/business_type/list', {});
    },

   /*
    * 创建/编辑签约开发商信息  
    * type: post
    * parammeters: 无请求参数
    */
    cusTomer: () => {
        return post('/cus_tomer', {});
    },

   /*
    * 签约开发商列表  
    * type: post
    * parammeters: 无请求参数
    */
    customerList: () => {
        return post('/customer/list', {});
    },

   /*
    * 创建/编辑交付清单管理  
    * type: post
    * parammeters: 有请求参数
    */
    deliveryConfiguration: (deliveryConfigurationParams: DeliveryConfigurationParams) => {
        return post('/delivery_configuration', deliveryConfigurationParams);
    },

   /*
    * 组件列表  
    * type: post
    * parammeters: 有请求参数
    */
    deliveryConfigurationComponentList: (deliveryConfigurationComponentListParams: DeliveryConfigurationComponentListParams) => {
        return post('/delivery_configuration/component_list', deliveryConfigurationComponentListParams);
    },

   /*
    * 交付组件列表  
    * type: post
    * parammeters: 有请求参数
    */
    deliveryConfigurationDeliveryItemList: (deliveryConfigurationDeliveryItemListParams: DeliveryConfigurationDeliveryItemListParams) => {
        return post('/delivery_configuration/delivery_item_list', deliveryConfigurationDeliveryItemListParams);
    },

   /*
    * 交付组件类型列表  
    * type: post
    * parammeters: 无请求参数
    */
    deliveryConfigurationDeliveryItemTypeList: () => {
        return post('/delivery_configuration/delivery_item_type_list', {});
    },

   /*
    * 交付清单管理详情  
    * type: post
    * parammeters: 有请求参数
    */
    deliveryConfigurationDetail: (deliveryConfigurationDetailParams: DeliveryConfigurationDetailParams) => {
        return post('/delivery_configuration/detail', deliveryConfigurationDetailParams);
    },

   /*
    * 交付清单管理列表  
    * type: post
    * parammeters: 有请求参数
    */
    deliveryConfigurationList: (deliveryConfigurationListParams: DeliveryConfigurationListParams) => {
        return post('/delivery_configuration/list', deliveryConfigurationListParams);
    },

   /*
    * 操作记录列表  
    * type: post
    * parammeters: 无请求参数
    */
    operationRecordsList: () => {
        return post('/operation_records/list', {});
    },

   /*
    * 创建/编辑游戏信息  
    * type: post
    * parammeters: 有请求参数
    */
    product: (productParams: ProductParams) => {
        return post('/product', productParams);
    },

   /*
    * 游戏列表  
    * type: post
    * parammeters: 无请求参数
    */
    productList: () => {
        return post('/product/list', {});
    },

   /*
    * 创建/编辑项目  
    * type: post
    * parammeters: 有请求参数
    */
    projects: (projectsParams: ProjectsParams) => {
        return post('/projects', projectsParams);
    },

   /*
    * 删除项目数据  
    * type: get
    * parammeters: 无请求参数
    */
    projectsDelete: () => {
        return post('/projects/delete', {});
    },

   /*
    * 项目管理详情  
    * type: post
    * parammeters: 有请求参数
    */
    projectsDetail: (projectsDetailParams: ProjectsDetailParams) => {
        return post('/projects/detail', projectsDetailParams);
    },

   /*
    * 项目列表  
    * type: post
    * parammeters: 有请求参数
    */
    projectsList: (projectsListParams: ProjectsListParams) => {
        return post('/projects/list', projectsListParams);
    },

   /*
    * 项目状态列表  
    * type: post
    * parammeters: 无请求参数
    */
    projectsStateList: () => {
        return post('/projects_state/list', {});
    },

   /*
    * 创建/编辑服务子项  
    * type: post
    * parammeters: 有请求参数
    */
    serviceProduct: (serviceProductParams: ServiceProductParams) => {
        return post('/service_product', serviceProductParams);
    },

   /*
    * 服务子项详情  
    * type: post
    * parammeters: 有请求参数
    */
    serviceProductDetail: (serviceProductDetailParams: ServiceProductDetailParams) => {
        return post('/service_product/detail', serviceProductDetailParams);
    },

   /*
    * 服务子项列表  
    * type: post
    * parammeters: 有请求参数
    */
    serviceProductList: (serviceProductListParams: ServiceProductListParams) => {
        return post('/service_product/list', serviceProductListParams);
    },

   /*
    * 服务子项业务列表  
    * type: post
    * parammeters: 无请求参数
    */
    serviceProductBusinessList: () => {
        return post('/service_product_business/list', {});
    },

   /*
    * 服务子项类别列表  
    * type: post
    * parammeters: 无请求参数
    */
    serviceProductCategoryList: () => {
        return post('/service_product_category/list', {});
    },

   /*
    * 服务子项成本类型列表  
    * type: post
    * parammeters: 无请求参数
    */
    serviceProductCostTypeList: () => {
        return post('/service_product_cost_type/list', {});
    },

   /*
    * 服务子项中台列表  
    * type: post
    * parammeters: 无请求参数
    */
    serviceProductOrgList: () => {
        return post('/service_product_org/list', {});
    },

   /*
    * 服务类型名称列表  
    * type: post
    * parammeters: 无请求参数
    */
    serviceProductTypeList: () => {
        return post('/service_product_type/list', {});
    },

   /*
    * 创建/编辑解决方案配置管理  
    * type: post
    * parammeters: 有请求参数
    */
    solutionConfiguration: (solutionConfigurationParams: SolutionConfigurationParams) => {
        return post('/solution_configuration', solutionConfigurationParams);
    },

   /*
    * 删除解决方案配置管理数据  
    * type: get
    * parammeters: 无请求参数
    */
    solutionConfigurationDelete: () => {
        return post('/solution_configuration/delete', {});
    },

   /*
    * 解决方案配置管理详情  
    * type: post
    * parammeters: 有请求参数
    */
    solutionConfigurationDetail: (solutionConfigurationDetailParams: SolutionConfigurationDetailParams) => {
        return post('/solution_configuration/detail', solutionConfigurationDetailParams);
    },

   /*
    * 解决方案配置管理列表  
    * type: post
    * parammeters: 有请求参数
    */
    solutionConfigurationList: (solutionConfigurationListParams: SolutionConfigurationListParams) => {
        return post('/solution_configuration/list', solutionConfigurationListParams);
    },

   /*
    * 交付清单管理详情  
    * type: get
    * parammeters: 无请求参数
    */
    V2DeliveryConfigurationDetail: () => {
        return post('/v2/delivery_configuration/detail', {});
    },

   /*
    * 项目管理详情  
    * type: get
    * parammeters: 无请求参数
    */
    V2ProjectsDetail: () => {
        return post('/v2/projects/detail', {});
    },

   /*
    * 项目列表  
    * type: post
    * parammeters: 有请求参数
    */
    V2ProjectsList: (V2ProjectsListParams: V2ProjectsListParams) => {
        return post('/v2/projects/list', V2ProjectsListParams);
    },

}
