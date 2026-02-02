import { ChevronLeft, Store, Bell, Settings, TrendingDown, Wallet, X, Trash2, Plus, MessageSquare, Building2, MapPinned } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import { useState } from 'react';

export default function DeliveryBalance() {
  const navigate = useNavigate();
  // Account type state: 'store' | 'brand' | 'region'
  const [accountType, setAccountType] = useState<'store' | 'brand' | 'region'>('store');
  const [filterType, setFilterType] = useState<'all' | 'expense' | 'income'>('all');
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [isRechargeModalOpen, setIsRechargeModalOpen] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState<number | ''>(100);
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'wechat'>('wechat');
  const [threshold, setThreshold] = useState('100');
  const [recipients, setRecipients] = useState([
    { id: '1', name: '张晓毅', phone: '138****8888', role: 'store_manager' }
  ]);
  const [isAddingRecipient, setIsAddingRecipient] = useState(false);
  const [newRecipient, setNewRecipient] = useState({ name: '', phone: '' });

  const handleAddRecipient = () => {
    if (newRecipient.name && newRecipient.phone) {
      setRecipients([...recipients, { 
        id: Date.now().toString(), 
        name: newRecipient.name, 
        phone: newRecipient.phone, 
        role: 'custom' 
      }]);
      setNewRecipient({ name: '', phone: '' });
      setIsAddingRecipient(false);
    }
  };

  const handleDeleteRecipient = (id: string) => {
    setRecipients(recipients.filter(r => r.id !== id));
  };

  const transactions = [
    {
      id: 1,
      type: 'expense',
      title: '订单配送费扣除',
      tags: ['达达快送'],
      time: '今天 12:30',
      orderId: '#8829',
      amount: '-3.50',
      amountColor: 'text-[#1f2937]'
    },
    {
      id: 2,
      type: 'expense',
      title: '订单配送费扣除',
      tags: ['顺丰同城'],
      time: '今天 12:15',
      orderId: '#8828',
      amount: '-4.20',
      amountColor: 'text-[#1f2937]'
    },
    {
      id: 3,
      type: 'expense',
      title: '订单配送费扣除',
      tags: ['达达快送'],
      time: '今天 11:50',
      orderId: '#8825',
      amount: '-3.50',
      amountColor: 'text-[#1f2937]'
    },
    {
      id: 4,
      type: 'income',
      title: '账户充值',
      tags: [],
      time: '今天 10:00',
      orderId: 'RC24102401',
      amount: '+500.00',
      amountColor: 'text-[#22c55e]'
    },
    {
      id: 5,
      type: 'expense',
      title: '订单配送费扣除',
      tags: ['美团跑腿'],
      time: '昨天 18:20',
      orderId: '#8812',
      amount: '-5.00',
      amountColor: 'text-[#1f2937]'
    }
  ];

  return (
    <div className="h-full flex flex-col bg-[#F5F6F8] relative">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50">
        <StatusBar />
        <div className="flex items-center justify-between px-4 py-3 pb-4">
          <button onClick={() => navigate(-1)} className="p-1 -ml-2 active:bg-gray-100 rounded-full">
            <ChevronLeft size={24} className="text-[#1f2937]" />
          </button>
          <h1 
            className="text-[18px] font-bold text-[#1f2937] active:opacity-50 transition-opacity cursor-pointer select-none"
            onClick={() => {
              const types: ('store' | 'brand' | 'region')[] = ['store', 'brand', 'region'];
              const next = types[(types.indexOf(accountType) + 1) % types.length];
              setAccountType(next);
            }}
          >
            配送余额 {accountType !== 'store' && <span className="text-[10px] bg-gray-100 text-gray-500 px-1 rounded align-middle ml-1">{accountType === 'brand' ? '品牌' : '区域'}</span>}
          </h1>
          <div className="w-8"></div> {/* Spacer for center alignment */}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide p-3">
        {/* Balance Card */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-5 relative overflow-hidden border border-gray-50">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-[#f3f4f6] text-[#4b5563] p-1.5 rounded-full">
                {accountType === 'store' && <Store size={14} strokeWidth={2.5} />}
                {accountType === 'brand' && <Building2 size={14} strokeWidth={2.5} />}
                {accountType === 'region' && <MapPinned size={14} strokeWidth={2.5} />}
              </div>
              <span className="text-[14px] font-bold text-[#374151]">
                {accountType === 'store' ? '门店独立账户' : accountType === 'brand' ? '品牌账户' : '区域账户'}
              </span>
            </div>
            
            {accountType === 'store' && (
              <button 
                className="flex items-center gap-1 bg-[#fff7ed] text-[#ea580c] text-[11px] font-bold px-2.5 py-1.5 rounded-full border border-[#ffedd5] active:bg-[#ffedd5] transition-colors"
                onClick={() => setIsReminderModalOpen(true)}
              >
                <Bell size={12} strokeWidth={2.5} />
                <span>低于{threshold}提醒</span>
                <Settings size={12} strokeWidth={2.5} className="ml-0.5 opacity-80" />
              </button>
            )}
          </div>

          {accountType === 'store' ? (
            <>
              {/* Balance Amount */}
              <div className="flex flex-col items-center mb-8">
                <span className="text-[13px] text-[#9ca3af] font-medium mb-2 tracking-wide">当前可用余额 (元)</span>
                <span className="text-[46px] font-black text-[#1f2937] tracking-tighter leading-none mb-6">212.70</span>
                <button 
                  onClick={() => setIsRechargeModalOpen(true)}
                  className="bg-[#1f2937] text-white text-[15px] font-bold px-12 py-3.5 rounded-full shadow-lg shadow-gray-200 active:scale-95 transition-all hover:shadow-xl hover:bg-[#111827]"
                >
                  立即充值
                </button>
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-between relative bg-[#f9fafb] rounded-[16px] p-4">
                 {/* Vertical Divider */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-gray-200"></div>

                <div className="flex-1 flex flex-col items-center">
                  <span className="text-[11px] text-[#9ca3af] font-medium mb-1">昨日消耗</span>
                  <span className="text-[16px] font-bold text-[#1f2937]">¥ 128.50</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-[11px] text-[#9ca3af] font-medium mb-1">今日已消费</span>
                  <span className="text-[16px] font-bold text-[#1f2937]">¥ 11.20</span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 bg-[#f9fafb] rounded-[16px] border border-dashed border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-3">
                <Wallet size={24} />
              </div>
              <p className="text-[#6b7280] font-medium text-[14px]">
                {accountType === 'brand' ? '品牌账户' : '区域账户'}不支持查看余额
              </p>
            </div>
          )}
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm min-h-[400px]">
          {/* Header & Tabs */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[18px] font-bold text-[#1f2937]">资金明细</h2>
            <div className="bg-[#f3f4f6] p-1 rounded-[10px] flex text-[13px] font-medium">
              <button 
                onClick={() => setFilterType('all')}
                className={`px-4 py-1.5 rounded-[8px] transition-all ${
                  filterType === 'all' 
                    ? 'bg-white text-[#1f2937] shadow-sm font-bold' 
                    : 'text-[#6b7280] hover:text-[#374151]'
                }`}
              >
                全部
              </button>
              <button 
                onClick={() => setFilterType('expense')}
                className={`px-4 py-1.5 rounded-[8px] transition-all ${
                  filterType === 'expense' 
                    ? 'bg-white text-[#1f2937] shadow-sm font-bold' 
                    : 'text-[#6b7280] hover:text-[#374151]'
                }`}
              >
                支出
              </button>
              <button 
                onClick={() => setFilterType('income')}
                className={`px-4 py-1.5 rounded-[8px] transition-all ${
                  filterType === 'income' 
                    ? 'bg-white text-[#1f2937] shadow-sm font-bold' 
                    : 'text-[#6b7280] hover:text-[#374151]'
                }`}
              >
                收入
              </button>
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col gap-8">
            {Object.entries(
              transactions
                .filter(item => filterType === 'all' || item.type === filterType)
                .reduce((groups, item) => {
                  const day = item.time.split(' ')[0];
                  if (!groups[day]) groups[day] = [];
                  groups[day].push(item);
                  return groups;
                }, {} as Record<string, typeof transactions>)
            ).map(([day, items]) => (
              <div key={day} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                   <h3 className="text-[14px] font-bold text-[#1f2937]">{day}</h3>
                   <div className="h-[1px] flex-1 bg-gray-50"></div>
                </div>
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start group cursor-pointer">
                      <div className="flex gap-4">
                        <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          item.type === 'income' 
                            ? 'bg-[#ecfdf5] text-[#10b981] group-hover:bg-[#d1fae5]' 
                            : 'bg-[#f3f4f6] text-[#6b7280] group-hover:bg-[#e5e7eb]'
                        }`}>
                          {item.type === 'income' ? (
                             <Wallet size={20} strokeWidth={2} />
                          ) : (
                             <TrendingDown size={20} strokeWidth={2} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[15px] font-bold text-[#1f2937]">{item.title}</span>
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className="text-[10px] text-[#6b7280] bg-[#f3f4f6] px-1.5 py-0.5 rounded-[4px] font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="text-[12px] text-[#9ca3af] font-medium tracking-tight">
                            {item.time.split(' ')[1]} <span className="mx-1 opacity-50">|</span> 单号: {item.orderId}
                          </div>
                        </div>
                      </div>
                      <div className={`text-[16px] font-bold tracking-tight ${item.amountColor}`}>
                        {item.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {transactions.filter(item => filterType === 'all' || item.type === filterType).length === 0 && (
               <div className="flex flex-col items-center justify-center py-12 text-[#9ca3af]">
                 <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                   <Wallet size={32} className="opacity-20" />
                 </div>
                 <span className="text-[13px]">暂无资金明细</span>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* Reminder Modal Overlay */}
      {isReminderModalOpen && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsReminderModalOpen(false)}></div>
          <div className="bg-white w-full rounded-t-[24px] p-5 pb-8 relative z-10 animate-in slide-in-from-bottom duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-bold text-[#1f2937]">余额提醒设置</h3>
              <button onClick={() => setIsReminderModalOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X size={24} className="text-[#9ca3af]" />
              </button>
            </div>

            {/* Threshold Setting */}
            <div className="mb-6">
              <label className="block text-[14px] font-bold text-[#374151] mb-2">提醒阈值 (元)</label>
              <div className="flex items-center gap-2 bg-[#f9fafb] border border-gray-200 rounded-[12px] px-4 py-3">
                <span className="text-[#1f2937] font-bold">¥</span>
                <input 
                  type="number" 
                  value={threshold}
                  onChange={(e) => setThreshold(e.target.value)}
                  className="bg-transparent w-full outline-none text-[#1f2937] font-bold text-[16px]"
                  placeholder="请输入金额"
                />
              </div>
            </div>

            {/* Notification Method */}
            <div className="mb-6">
              <label className="block text-[14px] font-bold text-[#374151] mb-2">通知方式</label>
              <div className="flex items-center gap-2 text-[#4b5563] bg-[#f3f4f6] px-3 py-2 rounded-[8px] w-fit">
                <MessageSquare size={16} />
                <span className="text-[13px] font-medium">短信通知</span>
              </div>
              <p className="text-[11px] text-[#9ca3af] mt-1.5 ml-0.5">当余额低于设定阈值时，将发送短信给指定联系人</p>
            </div>

            {/* Recipients */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="block text-[14px] font-bold text-[#374151]">通知对象 ({recipients.length}/3)</label>
              </div>

              <div className="flex flex-col gap-3">
                {recipients.map((recipient) => (
                  <div key={recipient.id} className="flex items-center justify-between bg-white border border-gray-100 shadow-sm rounded-[12px] p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#6b7280] font-bold text-[14px]">
                        {recipient.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#1f2937] text-[14px]">{recipient.name}</span>
                          {recipient.role === 'store_manager' && (
                            <span className="bg-[#eff6ff] text-[#2563eb] text-[10px] px-1.5 py-0.5 rounded-[4px] font-bold border border-[#dbeafe]">店长</span>
                          )}
                        </div>
                        <div className="text-[12px] text-[#6b7280] font-medium">{recipient.phone}</div>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteRecipient(recipient.id)} className="p-2 text-[#9ca3af] active:text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}

                {/* Add Recipient Section */}
                {isAddingRecipient ? (
                  <div className="bg-[#f9fafb] border border-dashed border-gray-300 rounded-[12px] p-3 animate-in fade-in duration-200">
                    <div className="flex gap-2 mb-3">
                      <input 
                        type="text" 
                        placeholder="姓名"
                        value={newRecipient.name}
                        onChange={(e) => setNewRecipient({...newRecipient, name: e.target.value})}
                        className="flex-1 bg-white border border-gray-200 rounded-[8px] px-3 py-2 text-[13px] outline-none focus:border-[#2563eb]"
                      />
                      <input 
                        type="tel" 
                        placeholder="手机号"
                        value={newRecipient.phone}
                        onChange={(e) => setNewRecipient({...newRecipient, phone: e.target.value})}
                        className="flex-[1.5] bg-white border border-gray-200 rounded-[8px] px-3 py-2 text-[13px] outline-none focus:border-[#2563eb]"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setIsAddingRecipient(false);
                          setNewRecipient({ name: '', phone: '' });
                        }}
                        className="flex-1 py-2 text-[13px] font-medium text-[#6b7280] bg-white border border-gray-200 rounded-[8px] active:bg-gray-50"
                      >
                        取消
                      </button>
                      <button 
                        onClick={handleAddRecipient}
                        className={`flex-1 py-2 text-[13px] font-bold rounded-[8px] transition-colors ${
                          newRecipient.name && newRecipient.phone 
                            ? 'bg-[#1f2937] text-white shadow-md shadow-gray-200' 
                            : 'bg-[#e5e7eb] text-[#9ca3af]'
                        }`}
                        disabled={!newRecipient.name || !newRecipient.phone}
                      >
                        确认添加
                      </button>
                    </div>
                  </div>
                ) : (
                  recipients.length < 3 && (
                    <button 
                      onClick={() => setIsAddingRecipient(true)}
                      className="w-full py-3 border border-dashed border-gray-300 rounded-[12px] flex items-center justify-center gap-1.5 text-[#6b7280] bg-[#f9fafb] active:bg-gray-100 transition-colors group"
                    >
                      <Plus size={16} className="group-hover:scale-110 transition-transform" />
                      <span className="text-[13px] font-medium">添加联系人</span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Save Button */}
            <button 
              onClick={() => setIsReminderModalOpen(false)}
              className="w-full bg-[#111827] text-white text-[16px] font-bold py-3.5 rounded-[16px] active:scale-[0.98] transition-transform shadow-xl shadow-gray-200"
            >
              保存设置
            </button>
          </div>
        </div>
      )}

      {/* Recharge Modal Overlay */}
      {isRechargeModalOpen && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsRechargeModalOpen(false)}></div>
          <div className="bg-white w-full rounded-t-[24px] p-5 pb-8 relative z-10 animate-in slide-in-from-bottom duration-200 max-h-[90%] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-bold text-[#1f2937]">充值</h3>
              <button onClick={() => setIsRechargeModalOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X size={24} className="text-[#9ca3af]" />
              </button>
            </div>

            {/* Account Info */}
            <div className="bg-[#f9fafb] rounded-[16px] p-4 mb-6 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[13px] text-[#6b7280] font-medium">充值账户</span>
                <span className="text-[13px] text-[#1f2937] font-bold">
                  {accountType === 'store' ? '门店独立账户' : accountType === 'brand' ? '品牌账户' : '区域账户'}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[13px] text-[#6b7280] font-medium">账户ID</span>
                <span className="text-[13px] text-[#1f2937] font-bold">882931</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-[#6b7280] font-medium">当前余额</span>
                <span className="text-[13px] text-[#1f2937] font-bold">¥ 212.70</span>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-[14px] font-bold text-[#374151] mb-3">充值金额</label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {[100, 200, 300, 500, 1000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setRechargeAmount(amount)}
                    className={`py-3 rounded-[12px] font-bold text-[15px] border transition-all ${
                      rechargeAmount === amount
                        ? 'bg-[#1f2937] text-white border-[#1f2937] shadow-md'
                        : 'bg-white text-[#1f2937] border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    ¥ {amount}
                  </button>
                ))}
                <div className={`relative flex items-center justify-center rounded-[12px] border transition-all ${
                    rechargeAmount && ![100, 200, 300, 500, 1000].includes(rechargeAmount)
                      ? 'border-[#1f2937] ring-1 ring-[#1f2937]' 
                      : 'border-gray-200'
                  }`}>
                  <span className="absolute left-3 text-[14px] font-bold text-[#1f2937]">¥</span>
                  <input
                    type="number"
                    placeholder="自定义"
                    className="w-full h-full bg-transparent text-center font-bold text-[15px] outline-none pl-4 pr-2 py-3 rounded-[12px]"
                    value={rechargeAmount && ![100, 200, 300, 500, 1000].includes(rechargeAmount) ? rechargeAmount : ''}
                    onChange={(e) => {
                      const val = e.target.value ? parseInt(e.target.value) : '';
                      if (val === '' || (val > 0 && val <= 50000)) {
                        setRechargeAmount(val);
                      }
                    }}
                    onFocus={() => {
                        if ([100, 200, 300, 500, 1000].includes(rechargeAmount as number)) {
                            setRechargeAmount('');
                        }
                    }}
                  />
                </div>
              </div>
              <p className="text-[11px] text-[#9ca3af]">单日充值上限 ¥ 50,000</p>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-[14px] font-bold text-[#374151] mb-3">支付方式</label>
              <div className="flex flex-col gap-3">
                <div 
                  className={`flex items-center justify-between p-4 rounded-[16px] border cursor-pointer transition-all ${
                    paymentMethod === 'wechat' ? 'border-[#22c55e] bg-[#f0fdf4]' : 'border-gray-100 bg-white'
                  }`}
                  onClick={() => setPaymentMethod('wechat')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center text-white">
                      <MessageSquare size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-[#1f2937]">微信支付</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'wechat' ? 'border-[#22c55e] bg-[#22c55e]' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'wechat' && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>

                <div 
                  className={`flex items-center justify-between p-4 rounded-[16px] border cursor-pointer transition-all ${
                    paymentMethod === 'alipay' ? 'border-[#0ea5e9] bg-[#f0f9ff]' : 'border-gray-100 bg-white'
                  }`}
                  onClick={() => setPaymentMethod('alipay')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white">
                      <span className="font-black italic text-[14px]">支</span>
                    </div>
                    <span className="font-bold text-[#1f2937]">支付宝</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'alipay' ? 'border-[#0ea5e9] bg-[#0ea5e9]' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'alipay' && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button 
              className="w-full bg-[#111827] text-white text-[16px] font-bold py-3.5 rounded-[16px] active:scale-[0.98] transition-transform shadow-xl shadow-gray-200 disabled:opacity-50 disabled:active:scale-100"
              disabled={!rechargeAmount}
              onClick={() => {
                alert(`模拟支付：¥ ${rechargeAmount} 使用 ${paymentMethod === 'wechat' ? '微信' : '支付宝'}`);
                setIsRechargeModalOpen(false);
              }}
            >
              立即支付 {rechargeAmount ? `¥ ${rechargeAmount}` : ''}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
