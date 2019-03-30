const Language = {
    //signin
    signIn: {
        sport: 'Thể Thao',
        promotion: 'Khuyến mãi',
        btnSignIn: 'Đăng nhập',
        placeHUsername: 'Tên truy cập',
        placeHPassword: 'Mật khẩu',
        btnLogOut: 'Đăng xuất',
        welcomeBack: 'Xin chào',
        btnSignUp: 'Đăng ký',
        forgotPass: 'Quên mật khẩu ?',
        home: 'Trang chủ',
        virtual_sport: 'Thể thao ảo',
        games: 'Trò chơi',
        casino: 'Sòng bạc',
        events: 'Sự kiện',
        product_features: 'Sản phẩm & tính năng mới',
        contact_us: 'Liên hệ ( yêu cầu đăng nhập ) qua',
        btnClose: 'Close'
    },
    //signUp
    signUp: {
        enterInfoRegis: 'Nhập thông tin đăng kí',
        firstName: 'Tên',
        enterFirstName: 'Nhập Tên',
        lastName: 'Họ',
        enterLastName: 'Nhập Họ',
        userName: 'Tên tài khoản',
        enterUsername: 'Nhập tên tài khoản',
        password: 'Mật khẩu',
        enterPassword: 'Nhập mật khẩu',
        rePassword: 'Nhập lại mật khẩu',
        enterRePassword: 'Nhập lại mật khẩu',
        mobilePhone: 'Số điện thoại',
        enterMobilePhone: 'Nhập số điện thoại',
        cancel: 'Hủy',
        register: 'Đăng kí',
        enterEmail: 'Nhập email'
    },
    forgotPass: {
        enterEmailGetNewPass: 'Nhập email để nhận mật khẩu mới',
        email: 'Email',
        enterEmail: 'Nhập email',
        send: 'Gửi',
    },
    //menu header
    menuHeader: {
        home: 'Trang chủ',
        betList: 'D.Sách Cược',
        statements: 'Sao Kê',
        results: 'Kết Quả',
        messageHistory: 'Tin Nhắn',
        preferences: 'Tùy thích'
    },
    //filter
    option: {
        line: {
            '1 Line': '1 Dòng',
            '3 Lines': '3 Dòng',
            '5 Lines': '5 Dòng',
            'All markets': 'Tất Cả',
            'header': 'Dòng cược'
        },
        sort: {
            'Normal Sorting': 'Xếp Thông Thường',
            'Sort by Time': 'Xếp Theo T.Gian',
            header: 'Sắp xếp'
        },
        oddsEntry: {
            'American Odds': 'Tỷ Lệ Mỹ',
            'Malay Odds': 'Tỷ Lệ Mã Lai',
            'Euro Odds': 'Tỷ Lệ Châu Âu',
            'Indo Odds': 'Tỷ Lệ Indo'
        },
        leagues: {
            'selectLeagues': 'Chọn giải'
        }
    },
    //favourite
    myFavourite: {
        header: 'Mục yêu thích',
        noEvent: 'Trỏ chuột vào biểu tượng Ngôi Sao kế bên trận hoặc giải để chèn vào "mục yêu thích".'
    },
    //mybet
    myBet: {
        no_pendding: 'Chưa có vé cược',
        header: 'D.Sách Cược',
        risk: 'Dự tính tiền thua',
        stake: 'Tiền cược',
        running: 'Đang xử lý',
        waiting: 'Vui Lòng Chờ',
        '1st Half': 'Hiệp 1',
        'Match': 'Toàn Trận',
        'O/U': 'Tài/Xỉu',
        'Handicap': 'Chấp',
        '1X2': '1X2',
        'viewAll': 'Xem toàn bộ',
        'mixParlay': 'Cược Xiên',
        'Outright': 'Cược chung cuộc',
        'Odd/Event': 'Odd/Event',
        '0~1': '0~1',
        '2~3': '2~3',
        '4~6': '4~6',
        '7 & Over': '7 & Over',
        'HT/FT': 'Nữa trận / Toàn trận'
    },
    //modal league
    modalLeague: {
        selectLeagues: 'Chọn giải',
        deselectAll: 'Xoá chọn giải',
        selectAll: 'Chọn hết',
        cancel: 'Hủy',
        go: 'Đi tiếp'
    },
    //popup header
    popupHeader: {
        betList: 'D.Sách Cược',
        statement: 'Sao Kê',
        results: 'Kết Quả',
        messageHistory: 'Nhật Kí Tin Nhắn',
        preferences: 'Tuỳ thích'
    },
    //bet list
    betList: {
        'settled': 'Đã thanh toán',
        'today': 'Đang tiến hành (Hôm Nay)',
        'tomorrow': 'Đang tiến hành (Ngày Mai)',
        'all': 'Đang tiến hành (Tất cả các ngày)',
        header: 'D.Sách Cược',
        running: 'Vé Chờ KQ',
        '7Days': '7 Ngày',
        '4Weeks': '4 Tuần',
        byDay: 'Theo ngày',
        byWeek: 'Theo Tuần',
        byMonth: 'Theo Tháng',
        'no': 'No.',
        info: 'Thông tin',
        'selection': 'Chọn lựa',
        'stake': 'Tiền cược',
        'risk': 'Tiền thua',
        'winLoss': 'Thắng - Thua',
        'status': 'Trạng thái',
        noEvent: 'Tạm thời chưa có vé nào.',
        statusBet: {
            0: 'Đặt Cược Thất Bại',
            1: 'Đợi Kết Quả',
            2: 'Chờ Đợi',
            3: 'Thắng',
            4: 'Thua',
            5: 'Hoàn Vốn',
            6: 'Tỷ Lệ Cược Đã Thay Đổi',
            7: 'Cược Lớn Nhất',
            8: 'Lỗi Phát Sinh Trước Đặt Cược',
            9: 'Lỗi Phát Sinh Sau Đặt Cược',
            10: 'Điền số tiền cược',
            11: 'Thấp hơn cược nhỏ nhất.',
            12: 'Tài Khoản Không Đủ Tiền Mặt',
            13: 'Hoà',
            14: 'Từ Chối Nhận Vé'
        },
        '1st Half': 'Hiệp 1',
        'Match': 'Toàn Trận',
        'O/U': 'Tài/Xỉu',
        'Handicap': 'Chấp',
        '1X2': '1x2',
        note: 'Note: Thời gian được hiện thị theo...',
        mixParlay: 'Cược Xiên',
        'subtotalWinLost': 'Tổng thắng thua',
        'subtotalCom': 'Tổng Comm',
        'total': 'Tổng cộng',
        Outright: 'Cược chung cuộc'
    },
    //menu sport - market
    menuSportMarket: {
        sports: 'Thể thao',
        markets: 'Thị trường'
    },
    //menu ticket - parlay
    menuTicketParlay: {
        ticket: 'Vé cược ',
        parlay: 'Xiên',
        noEvent: 'Vui lòng chọn sự kiện và bắt đầu đặt cược.'
    },
    //logout
    logout: {
        title: 'Đăng xuất',
        button: 'Đăng xuất'
    },
    //statement
    statement: {
        header: 'Sao kê',
        past7Days: '7 ngày trước',
        past4Weeks: '4 tuần trước',
        lastMonth: 'Tháng trước',
        thisMonth: 'Tháng hiện tại',
        date: 'Ngày',
        remark: 'Ghi chú',
        type: 'Loại',
        total: 'Tổng Điểm',
        note: 'Note: Thời gian được hiện thị theo...',
        noEvent: 'Kết quả hiện thị rỗng.',
        remarkKey: {
            'TRANSFER IN': 'Chuyển vào',
            'TRANSFER OUT': 'Chuyển ra',
            'PLACE BET': 'Đặt cược',
            'GET PAY': 'GET PAY'
        },
        typeKey: {
            'TRANI': 'Chuyển vào',
            'TRANO': 'Chuyển ra',
            'BET': 'Đặt cược',
            'PAY': 'PAY',
        }
    },
    //result
    result: {
        title: 'Kết quả',
        today: 'Hôm nay',
        yesterday: 'Hôm qua',
        selectSort: {
            normal: 'Xếp Thông Thường',
            time: 'Xếp Theo T.Gian'
        },
        noEvent: 'Tạm thời không có kết quả',
        note: 'Note: Thời gian được hiện thị theo...',
        selectSport: {
            Soccer: 'Bóng Đá',
            Basketball: 'Bóng Rổ',
            Tennis: 'Quần Vợt',
            Hockey: 'Khúc Côn Cầu',
            'E Sports': 'Thể Thao Điện Tử',
            'Baseball': 'Bóng Chày',
            'Football': 'Bóng Bầu Dục',
            'Volleyball': 'Bóng Chuyền',
            'Badminton': 'Cầu Lông',
            'All Sports':'All Sports'
        },
        selectLeague: {
            'allLeagues': 'Tất cả giải'
        },
        header: {
            time: 'T.Gian',
            MATCH: 'Trận',
            match: 'Trận',
            ft: 'Toàn Trận',
            '1stH': 'Hiệp 1',
            '2ndH': 'Hiệp 2',
            map1: 'Bản Đồ 1',
            map2: 'Bản Đồ 2',
            map3: 'Bản Đồ 3',
            map4: 'Bản Đồ 4',
            map5: 'Bản Đồ 5',
            '1stQ': 'Phần Tư 1',
            '2ndQ': 'Phần Tư 2',
            '3rdQ': 'Phần Tư 3',
            '4thQ': 'Phần Tư 4',
            '1stS': 'Set 1',
            '2ndS': 'Set 2',
            '3rdS': 'Set 3',
            '4thS': 'Set 4',
            '5thS': 'Set 5',
        },
        matchStatus: {
            cancelled: 'Huỷ'
        },
        outright: {
            noWinner: 'No Winner'
        }
    },
    //messageHistory
    messageHistory: {
        header: 'Nhật kí tin nhắn',
        note: 'Note: Thời gian được hiện thị theo...',
        noEvent: 'Không có thông tin!',
        'specialAnnouncements': 'Thông Báo Đặc Biệt',
        personalMessage: 'Tin nhắn cá nhân',
        no: 'No.',
        id: 'ID',
        date: 'Ngày',
        message: 'Tin nhắn'
    },
    //preferences
    preferences: {
        header: 'Tuỳ thích',
        account: {
            header: 'Tài khoản',
            title: 'Thay đổi mật khẩu tài khoản',
            oldPass: 'Mật khẩu cũ',
            newPass: 'Mật khẩu mới',
            confirmPass: 'Xác Nhận Mật Khẩu',
            policiesPass: 'Phải gồm ít nhất 6 ký tự (tối đa 10) và có phân biệt kiểu chữ.',
            passwordNotMatch: 'Confirm password does not match.',
            btnChangePass: 'Đổi mật khẩu',
            nickname: 'Biệt danh',
            btnChangeNickname: 'Đặt biệt danh'
        },
        balance: {
            header: 'Số dư',
            clientID: 'ID Khách Hàng',
            currency: 'Loại Tiền Tệ',
            cashBalance: 'Số Dư Tín Dụng',
            creditBalance: 'Credit Balance',
            outstandingTrans: 'Tiền Cược Chưa Giao Dịch',
            givenCredit: 'Hạn Mức Tín Dụng',
            betCredit: 'Hạn mức cược'
        }
    },
    //menu
    menus: {
        soccer: 'Bóng Đá',
        live: 'Trực Tiếp',
        today: 'Hôm Nay',
        earlyMarket: 'Thị Trường Sớm',
        moneyLine: 'Kèo Thắng Thua',
        teamTotal: 'Tổng Điểm Đội',
        parlay: 'Cược xiên',
        '1stHalf': 'Hiệp 1',
        basketball: 'Bóng Rổ',
        tennis: 'Quần Vợt',
        hockey: 'Khúc Côn Cầu',
        eSports: 'Thể Thao Điện Tử',
        allGames: 'Tất Cả Các Trận',
        baseball: 'Bóng Chày',
        football: 'Bóng Bầu Dục',
        volleyball: 'Bóng Chuyền',
        badminton: 'Quần Vợt',
        outright: 'Cược chung cuộc',
        favourite: 'Mục Yêu Thích',
        'Mix Parlay': 'Cược xiên',
        'OE & TG':'Lẻ Chẵn & Tỉ số chung cuộc',
        '1X2 & DC':'1X2 & Cơ hội kép',
        'FT & FH CS':'Tỉ số đúng - Toàn trận & Hiệp 1',
        'HT / FT':'Nữa trận / Toàn trận',
        'FG & LG':'Bàn Đầu / Bàn Cuối'
    },
    menusTooltip: {
        soccer: 'Bóng Đá',
        live: 'Trực Tiếp',
        today: 'Hôm Nay',
        earlyMarket: 'Thị Trường Sớm',
        moneyLine: 'Kèo Thắng Thua',
        teamTotal: 'Tổng Điểm Đội',
        parlay: 'Cược xiên',
        '1stHalf': 'Hiệp 1',
        basketball: 'Bóng Rổ',
        tennis: 'Quần Vợt',
        hockey: 'Khúc Côn Cầu',
        eSports: 'Thể Thao Điện Tử',
        allGames: 'Tất Cả Các Trận',
        baseball: 'Bóng Chày',
        football: 'Bóng Bầu Dục',
        volleyball: 'Bóng Chuyền',
        badminton: 'Quần Vợt',
        outright: 'Cược chung cuộc',
        favourite: 'Mục Yêu Thích',
        'Mix Parlay': 'Cược xiên',
        'OE & TG':'Lẻ Chẵn & Tỉ số chung cuộc',
        '1X2 & DC':'1X2 & Cơ hội kép',
        'FT & FH CS':'Tỉ số đúng - Toàn trận & Hiệp 1',
        'HT / FT':'Nữa trận / Toàn trận',
        'FG & LG':'Bàn Đầu / Bàn Cuối'
    },
    //ticket
    ticket: {
        '1st Half': 'Hiệp 1',
        'Match': 'Toàn Trận',
        'Over/Under': 'Tài/Xỉu',
        'Handicap': 'Chấp',
        '1X2': '1x2',
        placeHStake: 'Tiền Cược',
        risk: 'Thua',
        minRisk: 'Cược Tối Thiểu',
        maxRisk: 'Cược Tối Đa',
        maxPayout: 'Trả Tối Đa',
        btnCancel: 'Huỷ',
        btnPlacebet: 'Đặt cược',
        Outright: 'Cược chung cuộc',
        winLimit: 'Tiền thắng tối đa'
    },
    //parlay
    parlay: {
        '1st Half': 'Hiệp 1',
        'Match': 'Toàn Trận',
        'Over/Under': 'Tài/Xỉu',
        'Handicap': 'Chấp',
        '1X2': '1x2',
        FT: 'FT',
        placeHStake: 'Tiền Cược',
        minRisk: 'Cược Tối Thiểu',
        maxRisk: 'Cược Tối Đa',
        maxPayout: 'Trả Tối Đa',
        btnCancel: 'Huỷ',
        btnPlacebet: 'Đặt cược',
        odds: 'Odds',
        'N/A': 'N/A',
        risk: 'Thua',
        winLimit: 'Tiền thắng tối đa'
    },
    odds: {
        //header
        header: {
            29: {
                name: 'Bóng Đá',
                live: 'Trực Tiếp',
                time: 'T.Gian',
                event: 'Sự kiện',
                fullTime: 'Toàn Trận',
                '1stHalf': 'Hiệp 1',
                '1x2': '1X2',
                'hdp': 'Chấp',
                'o/u': 'Tài/Xỉu',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                contest: 'Trận Đấu',
                odds: 'Tỷ Lệ Cược'
            },
            4: {
                name: 'Bóng Rổ',
                live: 'Trực Tiếp',
                time: 'T.Gian',
                event: 'Sự kiện',
                fullTime: 'Toàn Trận',
                '1stHalf': 'Hiệp 1',
                '1x2': '1X2',
                'hdp': 'Chấp',
                'o/u': 'Tài/Xỉu',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },

            },
            33: {
                name: 'Quần Vợt',
                live: 'Trực Tiếp',
                time: 'T.Gian',
                event: 'Sự kiện',
                fullTime: 'Toàn Trận',
                '1stHalf': 'Hiệp 1',
                '1x2': '1X2',
                'hdp': 'Chấp',
                'o/u': 'Tài/Xỉu',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
            },
            12: {
                name: 'Thể Thao Điện Tử',
                live: 'Trực Tiếp',
                time: 'T.Gian',
                event: 'Sự kiện',
                fullTime: 'Toàn Trận',
                '1stHalf': 'Hiệp 1',
                '1x2': '1X2',
                'hdp': 'Chấp',
                'o/u': 'Tài/Xỉu',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
            },
            3: {
                name: 'Bóng chày',
                live: 'Trực Tiếp',
                time: 'T.Gian',
                event: 'Sự kiện',
                fullTime: 'Toàn Trận',
                '1stHalf': 'Hiệp 1',
                '1x2': '1X2',
                'hdp': 'HDP',
                'o/u': 'O/U',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
            },
            15: {
                name: 'Bóng Bầu Dục',
                live: 'LIVE',
                time: 'TIME',
                event: 'EVENT',
                fullTime: 'FULLTIME',
                '1stHalf': '1ST HALF',
                '1x2': '1X2',
                'hdp': 'HDP',
                'o/u': 'O/U',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
            },
            34: {
                name: 'Bóng Chuyền',
                live: 'LIVE',
                time: 'TIME',
                event: 'EVENT',
                fullTime: 'FULLTIME',
                '1stHalf': '1ST HALF',
                '1x2': '1X2',
                'hdp': 'HDP',
                'o/u': 'O/U',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
            },
            1: {
                name: 'Quần Vợt',
                live: 'Trực Tiếp',
                time: 'T.Gian',
                event: 'Sự kiện',
                fullTime: 'Toàn Trận',
                '1stHalf': 'Hiệp 1',
                '1x2': '1X2',
                'hdp': 'Chấp',
                'o/u': 'Tài/Xỉu',
                0: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                1: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                2: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
                3: {
                    '1x2': 'Home',
                    'hdp': 'Draw',
                    'o/u': 'Away'
                },
                7: {
                    '1x2': '1X2',
                    'hdp': 'HDP',
                    'o/u': 'O/U'
                },
            },
        },
        //market
        market: {
            29: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            },
            4: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            },
            33: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            },
            12: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            },
            3: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            },
            15: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            },
            34: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            },
            1: {
                0: 'Hôm Nay',
                1: 'Trực Tiếp',
                2: 'T.Trường Sớm',
                3: '1X2 & DC',
                4: 'Cược chung cuộc',
                5: 'OE & TG',
                6: 'FT & FH CS',
                7: 'Cược Xiên',
                8: 'HT / FT',
                9: 'FG & LG',
            }
        },
        leagueLine: {
            '1 Line': '1 Dòng',
            '3 Lines': '3 Dòng',
            '5 Lines': '5 Dòng',
            'All': 'Tất Cả',
        },
        noEventAvailable: 'Không có sự kiện nào.'
    },
    //footer
    footer: {
        down_app: 'Hướng dẫn tải ứng dụng',
        contact_us: 'Liên hệ ( yêu cầu đăng nhập ) qua',
        aboutUs: 'Về chúng tôi',
        bettingRules: 'Luật cá cược',
        privacyPolicy: 'Chính sách bảo mật',
        responsibleGambling: 'Tiết chế trong cá cược',
        mobile: 'D.Động',
        intro: "7Sport là công ty cá cược thể thao trực tuyến hàng đầu thế giới. Với mọi thể hình cá cược của tất cả các môn thể thao như bóng đá, quần vợt, bóng rổ, cầu lông, bóng chuyền, thể thao môtô, đua ngựa, vv...,  7Sport luôn luôn cung cấp tỷ lệ cược tốt nhất và truyền hình trận đấu.",
        copyRight: 'Bản quyền © 2017 7Sport Inc. Đã đăng ký Bản quyền'
    },
    balance: {
        balance_member: 'Thông tin tài khoản',
        currency: 'Tiền tệ',
        clientid: 'Tên đăng nhập',
        credit_balance: 'Số dư tín dụng',
        outstanding: 'Cược đang chờ kết quả',
        cash: 'Số dư tiền mặt',
    },
    //alert
    alert: {
        at_least_6_characters: 'Biệt danh có ít nhất 6 ký tự',
        set_nick_name_success: 'Biệt danh cập nhật thành công',
        set_nick_name_existing:'Biệt danh này đã được sử dụng. Vui lòng thử lại',
        can_not_set_special_nickname:'Không thể đặt tên đặc biệt cho Biệt danh này',
        more_than_10:'Số trận tối đa cho mỗi vé Xiên không vượt quá 10 trận',
        this_game_closed:'Trận đấu đã đóng , vui lòng chọn trận khác',
        your_pass_has_changed:'Mật mã đã thay đổi , vui lòng đăng nhập lại',
        the_odd_changed_from:'Tỷ lệ thay đổi từ',
        to:'đến',
        please_sign_in_before_placing:"Vui lòng đăng nhập trước khi đặt cược . Đăng kí ngay , nếu bạn chưa phải là thành viên.",
        your_pass_has_changed_please_email:'Mật khẩu đã thay đổi .\nVui lòng kiểm tra mail',
        reset_pass_failed:'Mật khẩu thiết lập lại thất bại. \nVui lòng thử lại.',
        the_pass_is_invalid:'Mật khẩu không hợp lệ. Vui lòng thử lại.',
        has_been_suspended:'Tài khoản bạn bị đóng băng. Vui lòng liên hệ chúng tôi để kích hoạt!',
        please_fill_username:'Vui lòng điền đúng tên thành viên và mật khẩu',
        your_session_has_expired:'Your session has expired. Please sign in again.',
        your_pass_could_not_be_changed:'Mật khẩu bạn không thể thay đổi , vui lòng thử lại',
        set_nickname_failed:'Thiết lập Nickname thất bại',
        this_email_has_been_used:'Email này đã được sử dụng . vui lòng thử email khác.',
        user_is_already_existed:'Tên thành viên đã tồn tại',
        create_new_account_failed:'Tạo tài khoản thất bại. \nVui lòng thử lại.',
        the_session_expired:'The session expired. Please re-login to renew the session.',
        this_account_is_currently:'Tài khoản đang được đăng nhập ở một nơi khác.',
        your_bet_is_accept:'Vé cược đã được chấp nhận.',
        waiting:'Chờ đợi.',
        bet_failed:'Đặt cược thất bại.',
        won:'Thắng!',
        lose:'Thua!',
        refunded:'Hoàn tiền!',
        odd_change:'Tỷ lệ thay đổi.!',
        max_wager:'Tiền cược lớn nhất!',
        exception_before_confirm:'Lỗi phát sinh trước khi xác nhận!',
        exception_after_confirm:'Lỗi phát sinh sau khi xác nhận!',
        zero_ammount:'Tiền cược = 0!',
        below_win_bet:'Thấp hơn tiền cược nhỏ nhất!',
        balance_exceeded:'Vượt mức tiền cho phép!',
        this_bet_war_not_accepted_min:'\n\nTiền cược phải cao hơn mức cược nhỏ nhất, hệ thống sẽ tự điều chỉnh cho phù hợp.',
        this_bet_war_not_accepted_max:'\n\nTiền cược phải thấp hơn mức cược lớn nhất , hệ thống sẽ tự điều chỉnh cho phù hợp.',
        please_enter_a_bet_amount:'\n\nVui lòng điền tiền cược.',
        this_bet_war_not_accepted_max_payout :'\n\nMức thắng vượt quá mức cho phép, hệ thống sẽ tự điều chỉnh cho phù hợp.',
        user_does_not_exist: 'Người dùng không tồn tại.',
        account_suspend: 'Tài khoản của bạn không thể thực hiện cá cược được , vui lòng liên hệ đại lý của bạn để tìm hiểu thêm . Mong quý khách thứ lỗi cho sự bất tiện này !'
    },
    promo: {
        comingSoon: 'Coming soon',
        'e-Games': 'E-Games',
        'liveCasino': 'Live Casino'
    },
    livestream: {
        btnText: 'LIVE STREAMING',
        sportFilter: 'Sport Filters',
        watchLive:'WATCH LIVE FULL STREAM SCHEDULE',
        list_filter: {
            'Today': 'Today',
            'Tomorrow': 'Tomorow',
            'Sunday': 'Sunday',
            'Monday': 'Mon',
            'Tueday': 'Wednesday',
            'Wednesday': 'Wednesday',
            'Thursday': 'Thursday',
            'Friday': 'Friday',
            'Saturday': 'Saturday'
        },
        list_question:{
            "Q1":`Q: How do I watch a Live Streaming event?`,
            "Q2":`Q: How do I see the latest in-play events while I watch a Live Streamed event?`,
            "Q3":`Q: Why can't I watch certain events that are held in my own country?`,
            "Q4":`Q: What am I allowed to do with the stream events that I view?`,
            "Q5":`Q: What can I do if the streaming is low or regulary getting disconnected?`,
            "Q6":`Q: When can I start watching a streamed video?`,
            "Q7":`Q: What are the system requirements?`
        },
        list_ask:{
            "A1":`A: You can view Live Streaming for free. You just need to be logged to an account with a balance.`,
            "A2":`A: Just login and go to our [LIVE] page. The LIVE CENTER automatically loads the earliest event and all of the latest in-play live events are displayed side-by-side with it. In addition, you can also see the Live Centre on the homepage together with the pre-event and live matches in the coupons.`,
            "A3":`A: We do not have permission to stream certain events. In addition, the streamed events available to you are based on your IP address.`,
            "A4":`A: 7Sports Live Streaming is strictly for your personal use only. All stream videos from 7Sports must not be copied or reproduced without the company’s permission.`,
            "A5":`A: Try accessing other websites to check if the loading problems are only occurring with 7Sports Live Streaming. If so, please contact our Customer Support. Otherwise, please contact your Internet Service Provider.`,
            "A6":`A: A video will already be available for streaming two minutes before the event starts and it will automatically be displayed on the LIVE CENTER. If there are multiple videos available, the first one to start will be displayed and you can select the other videos available located in the dropdown list.`,
            "A7":'A: See below: Microsoft: • Windows XP • Internet Explorer 8 and the latest versions of Firefox, Chrome, and Opera Apple: Mac OS X 10.6 Snow Leopard Latest versions of Safari, Firefox, Chrome, and Opera Broadband Speed: A connection speed of 512kbp/s or higher.'
        },
        not_found_video1:'Sorry, the game you selected is currently not available.',
        not_found_video2:'Please check back during the start of the game time.',
        iplock:'This IP is not supported. Please contact admin.'
    }
};

module.exports = Language;
