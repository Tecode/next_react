import {observable, action} from 'mobx';

class AppSore {
  @observable name = 'Mobx子页面';
  @observable day = '20';
  @observable treeData = {
    'errcode': 0,
    'errmsg': '成功！',
    'data': [
        {
            '_id': 23274,
            'name': '认证相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1526606843,
            'up_time': 1526606843,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 76297,
                    'method': 'GET',
                    'catid': 23274,
                    'title': '检验sessionId是否有效',
                    'path': '/login/sessionId/check',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526606926,
                    'up_time': 1526607006,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 25164,
            'name': '登录相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1527173941,
            'up_time': 1527173941,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 84667,
                    'method': 'GET',
                    'catid': 25164,
                    'title': '检测是否绑定',
                    'path': '/login/vbind',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527173974,
                    'up_time': 1527174094,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 85873,
                    'method': 'POST',
                    'catid': 25164,
                    'title': '解密用户数据/发送验证码',
                    'path': '/login/decode',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527257062,
                    'up_time': 1527257099,
                    'index': 1,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 85882,
                    'method': 'GET',
                    'catid': 25164,
                    'title': '登录/验证验证码',
                    'path': '/login/verifyVcode',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527257167,
                    'up_time': 1527257245,
                    'index': 2,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 26088,
            'name': '应聘相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1527565410,
            'up_time': 1527565410,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 88429,
                    'method': 'PUT',
                    'catid': 26088,
                    'title': '应聘人取消应聘',
                    'path': '/application/{applyId}/cancel',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527566753,
                    'up_time': 1527566862,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 88411,
                    'method': 'POST',
                    'catid': 26088,
                    'title': '申请应聘',
                    'path': '/application',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527565429,
                    'up_time': 1527565472,
                    'index': 1,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 88537,
                    'method': 'PUT',
                    'catid': 26088,
                    'title': '招聘人操作应聘申请',
                    'path': '/application/{applyId}/active',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527579261,
                    'up_time': 1527579311,
                    'index': 2,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 26298,
            'name': '单位信息相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1527643184,
            'up_time': 1527643184,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 89455,
                    'method': 'GET',
                    'catid': 26298,
                    'title': '个人单位信息',
                    'path': '/recruiter/info',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527643196,
                    'up_time': 1527682490,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 89464,
                    'method': 'POST',
                    'catid': 26298,
                    'title': '填写单位信息',
                    'path': '/recruiter/info',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527643331,
                    'up_time': 1527643453,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 89491,
                    'method': 'PUT',
                    'catid': 26298,
                    'title': '修改单位信息',
                    'path': '/recruiter/info',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527643833,
                    'up_time': 1527755770,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 27222,
            'name': '数据提供',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1528043192,
            'up_time': 1528043192,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 93640,
                    'method': 'GET',
                    'catid': 27222,
                    'title': '所有学校信息',
                    'path': '/data/university',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528043209,
                    'up_time': 1528043223,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 93649,
                    'method': 'GET',
                    'catid': 27222,
                    'title': '学校所有学院列表',
                    'path': '/data/college',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528043245,
                    'up_time': 1528043267,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 93658,
                    'method': 'GET',
                    'catid': 27222,
                    'title': '学院的专业列表',
                    'path': '/data/specialty',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528043282,
                    'up_time': 1528043317,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 101416,
                    'method': 'GET',
                    'catid': 27222,
                    'title': '每天招聘的应聘申请数量',
                    'path': '/data/statistics/applications',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528718980,
                    'up_time': 1528725386,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 28518,
            'name': '关于-帮助',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1528526367,
            'up_time': 1528526367,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 98428,
                    'method': 'POST',
                    'catid': 28518,
                    'title': '反馈意见',
                    'path': '/about/feedback',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528526380,
                    'up_time': 1528547166,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 98473,
                    'method': 'GET',
                    'catid': 28518,
                    'title': '查看喜欢的个数',
                    'path': '/about/like',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528556531,
                    'up_time': 1528556584,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 98482,
                    'method': 'PUT',
                    'catid': 28518,
                    'title': '喜欢',
                    'path': '/about/like',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528556624,
                    'up_time': 1528556645,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 28602,
            'name': '收藏',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1528684198,
            'up_time': 1528684198,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 98761,
                    'method': 'GET',
                    'catid': 28602,
                    'title': '查看所有收藏',
                    'path': '/collections',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528684212,
                    'up_time': 1528684242,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 98770,
                    'method': 'POST',
                    'catid': 28602,
                    'title': '收藏招聘广告',
                    'path': '/collections',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528684267,
                    'up_time': 1528684333,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 98779,
                    'method': 'DELETE',
                    'catid': 28602,
                    'title': '取消收藏',
                    'path': '/collections',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528684349,
                    'up_time': 1528684370,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 29400,
            'name': '评论相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1528859454,
            'up_time': 1528859454,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 102775,
                    'method': 'DELETE',
                    'catid': 29400,
                    'title': '删除自己评论',
                    'path': '/comments',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528859751,
                    'up_time': 1528859967,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 102784,
                    'method': 'POST',
                    'catid': 29400,
                    'title': '发表评论',
                    'path': '/comments',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528859990,
                    'up_time': 1528860043,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 29891,
            'name': '消息相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1529236498,
            'up_time': 1529236498,
            '__v': 0,
            'index': 0,
            'list': [
                {
                    '_id': 104365,
                    'method': 'DELETE',
                    'catid': 29891,
                    'title': '删除消息',
                    'path': '/message',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1529236511,
                    'up_time': 1529236538,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 23298,
            'name': '用户信息相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1526608724,
            'up_time': 1526608740,
            '__v': 0,
            'index': 1,
            'list': [
                {
                    '_id': 76351,
                    'method': 'GET',
                    'catid': 23298,
                    'title': '查看用户个人信息',
                    'path': '/users/profile',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526608759,
                    'up_time': 1526706105,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 94090,
                    'method': 'PUT',
                    'catid': 23298,
                    'title': '用户更新基本信息',
                    'path': '/users/profile',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1528119757,
                    'up_time': 1528120178,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76801,
                    'method': 'GET',
                    'catid': 23298,
                    'title': '查看某个用户部分信息',
                    'path': '/users/{userId}/profile',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526706275,
                    'up_time': 1526706301,
                    'index': 1,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76963,
                    'method': 'GET',
                    'catid': 23298,
                    'title': '个人应聘记录',
                    'path': '/users/application',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526797684,
                    'up_time': 1528249749,
                    'index': 2,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76972,
                    'method': 'GET',
                    'catid': 23298,
                    'title': '个人招聘记录',
                    'path': '/users/recruitment',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526797883,
                    'up_time': 1526798000,
                    'index': 3,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 92767,
                    'method': 'GET',
                    'catid': 23298,
                    'title': '个人招聘的应聘申请',
                    'path': '/users/recruitment/application',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527816525,
                    'up_time': 1528172774,
                    'index': 4,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 23280,
            'name': '权限相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1526606850,
            'up_time': 1526606850,
            '__v': 0,
            'index': 2,
            'list': [
                {
                    '_id': 76315,
                    'method': 'POST',
                    'catid': 23280,
                    'title': '查询用户访问URL权限',
                    'path': '/users/permission',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526607251,
                    'up_time': 1526607925,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 23472,
            'name': '简历信息',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1526782243,
            'up_time': 1526782243,
            '__v': 0,
            'index': 3,
            'list': [
                {
                    '_id': 76855,
                    'method': 'GET',
                    'catid': 23472,
                    'title': '查询个人简历信息',
                    'path': '/applicant/info',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526782263,
                    'up_time': 1528121742,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76864,
                    'method': 'POST',
                    'catid': 23472,
                    'title': '填写个人简历信息',
                    'path': '/applicant/info/write',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526783346,
                    'up_time': 1528121940,
                    'index': 1,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76873,
                    'method': 'PUT',
                    'catid': 23472,
                    'title': '修改个人简历信息',
                    'path': '/applicant/info',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526784917,
                    'up_time': 1528171719,
                    'index': 2,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 23496,
            'name': 'API管理',
            'project_id': 9003,
            'desc': '后台相关',
            'uid': 23628,
            'add_time': 1526794389,
            'up_time': 1526794389,
            '__v': 0,
            'index': 4,
            'list': [
                {
                    '_id': 76936,
                    'method': 'GET',
                    'catid': 23496,
                    'title': '查询所有API信息',
                    'path': '/admin/resources',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526794733,
                    'up_time': 1526794743,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76927,
                    'method': 'POST',
                    'catid': 23496,
                    'title': '注册一个API',
                    'path': '/admin/resources',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526794625,
                    'up_time': 1526794684,
                    'index': 1,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76918,
                    'method': 'PUT',
                    'catid': 23496,
                    'title': '更新一个API',
                    'path': '/admin/resources/{resId}',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526794503,
                    'up_time': 1526794819,
                    'index': 2,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76909,
                    'method': 'DELETE',
                    'catid': 23496,
                    'title': '删除一个API',
                    'path': '/admin/resources/{resId}',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526794426,
                    'up_time': 1526794516,
                    'index': 3,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 23418,
            'name': '招聘信息相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1526635915,
            'up_time': 1526635915,
            '__v': 0,
            'index': 5,
            'list': [
                {
                    '_id': 76684,
                    'method': 'POST',
                    'catid': 23418,
                    'title': '发布招聘信息',
                    'path': '/recruitment/publish',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526638254,
                    'up_time': 1528105599,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76648,
                    'method': 'GET',
                    'catid': 23418,
                    'title': '主页展示有效招聘信息',
                    'path': '/recruitment',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526635945,
                    'up_time': 1527146883,
                    'index': 1,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 76657,
                    'method': 'GET',
                    'catid': 23418,
                    'title': '查询具体招聘信息内容',
                    'path': '/detail',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1526636539,
                    'up_time': 1528859554,
                    'index': 2,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        },
        {
            '_id': 25104,
            'name': '搜索相关',
            'project_id': 9003,
            'desc': null,
            'uid': 23628,
            'add_time': 1527146007,
            'up_time': 1527146007,
            '__v': 0,
            'index': 6,
            'list': [
                {
                    '_id': 84460,
                    'method': 'GET',
                    'catid': 25104,
                    'title': '根据关键字搜索',
                    'path': '/search/keyword',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527146049,
                    'up_time': 1527146660,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                },
                {
                    '_id': 88699,
                    'method': 'GET',
                    'catid': 25104,
                    'title': '根据薪水进行筛选',
                    'path': '/search/salary',
                    'project_id': 9003,
                    'uid': 23628,
                    'add_time': 1527597314,
                    'up_time': 1527597373,
                    'index': 0,
                    'status': 'done',
                    'edit_uid': 0
                }
            ]
        }
    ]
};
  @action.bound log() {
    console.log('mobx');
  }
}

export default new AppSore();