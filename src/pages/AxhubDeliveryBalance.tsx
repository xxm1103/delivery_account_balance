import React from 'react';

// Axhub 要求的组件形式：const Component = ...
// 包含了内联样式和内置图标，移除了外部依赖。

const Component = () => {
  // --- State Management ---
  const [accountType, setAccountType] = React.useState('store'); // 'store' | 'brand' | 'region'
  const [filterType, setFilterType] = React.useState('all'); // 'all' | 'expense' | 'income'
  const [isReminderModalOpen, setIsReminderModalOpen] = React.useState(false);
  const [isRechargeModalOpen, setIsRechargeModalOpen] = React.useState(false);
  const [rechargeAmount, setRechargeAmount] = React.useState(100);
  const [paymentMethod, setPaymentMethod] = React.useState('wechat'); // 'wechat' | 'alipay'
  const [threshold, setThreshold] = React.useState('100');
  const [recipients, setRecipients] = React.useState([
    { id: '1', name: '张晓毅', phone: '138****8888', role: 'store_manager' }
  ]);
  const [isAddingRecipient, setIsAddingRecipient] = React.useState(false);
  const [newRecipient, setNewRecipient] = React.useState({ name: '', phone: '' });

  // --- Handlers ---
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

  const handleDeleteRecipient = (id: any) => {
    setRecipients(recipients.filter(r => r.id !== id));
  };

  const handleNavigateBack = () => {
    console.log('Navigate back');
  };

  // --- Mock Data ---
  const transactions = [
    { id: 1, type: 'expense', title: '订单配送费扣除', tags: ['达达快送'], time: '今天 12:30', orderId: '#8829', amount: '-3.50', amountColor: '#1f2937' },
    { id: 2, type: 'expense', title: '订单配送费扣除', tags: ['顺丰同城'], time: '今天 12:15', orderId: '#8828', amount: '-4.20', amountColor: '#1f2937' },
    { id: 3, type: 'expense', title: '订单配送费扣除', tags: ['达达快送'], time: '今天 11:50', orderId: '#8825', amount: '-3.50', amountColor: '#1f2937' },
    { id: 4, type: 'income', title: '账户充值', tags: [], time: '今天 10:00', orderId: 'RC24102401', amount: '+500.00', amountColor: '#22c55e' },
    { id: 5, type: 'expense', title: '订单配送费扣除', tags: ['美团跑腿'], time: '昨天 18:20', orderId: '#8812', amount: '-5.00', amountColor: '#1f2937' }
  ];

  // --- Icons (SVG Replacements) ---
  const ChevronLeft = ({ size = 24, color = "#1f2937" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
  const Store = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
  );
  const Building2 = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
  );
  const MapPinned = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0Z"/><circle cx="12" cy="8" r="2"/><path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"/></svg>
  );
  const Bell = ({ size = 12, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  );
  const Settings = ({ size = 12, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
  );
  const Wallet = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
  );
  const TrendingDown = ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
  );
  const X = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
  const MessageSquare = ({ size = 16, color = "currentColor", fill = "none" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  );
  const Trash2 = ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
  );
  const Plus = ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  );

  // --- Render ---
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F8', position: 'relative', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 50 }}>
        {/* StatusBar Placeholder */}
        <div style={{ height: '44px' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', paddingBottom: '16px' }}>
          <button onClick={handleNavigateBack} style={{ padding: '4px', marginLeft: '-8px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <ChevronLeft />
          </button>
          <h1 
            style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center' }}
            onClick={() => {
              const types = ['store', 'brand', 'region'];
              const next = types[(types.indexOf(accountType) + 1) % types.length];
              setAccountType(next);
            }}
          >
            配送余额 {accountType !== 'store' && <span style={{ fontSize: '10px', backgroundColor: '#f3f4f6', color: '#6b7280', padding: '0 4px', borderRadius: '4px', marginLeft: '4px', verticalAlign: 'middle' }}>{accountType === 'brand' ? '品牌' : '区域'}</span>}
          </h1>
          <div style={{ width: '32px' }}></div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px', scrollbarWidth: 'none' }}>
        {/* Balance Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', marginBottom: '20px', position: 'relative', overflow: 'hidden', border: '1px solid #f9fafb' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ backgroundColor: '#f3f4f6', color: '#4b5563', padding: '6px', borderRadius: '50%', display: 'flex' }}>
                {accountType === 'store' && <Store size={14} />}
                {accountType === 'brand' && <Building2 size={14} />}
                {accountType === 'region' && <MapPinned size={14} />}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>
                {accountType === 'store' ? '门店独立账户' : accountType === 'brand' ? '品牌账户' : '区域账户'}
              </span>
            </div>
            
            {accountType === 'store' && (
              <button 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#fff7ed', color: '#ea580c', 
                  fontSize: '11px', fontWeight: 'bold', padding: '6px 10px', borderRadius: '9999px', 
                  border: '1px solid #ffedd5', cursor: 'pointer' 
                }}
                onClick={() => setIsReminderModalOpen(true)}
              >
                <Bell size={12} />
                <span>低于{threshold}提醒</span>
                <Settings size={12} />
              </button>
            )}
          </div>

          {accountType === 'store' ? (
            <>
              {/* Balance Amount */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
                <span style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500, marginBottom: '8px', letterSpacing: '0.025em' }}>当前可用余额 (元)</span>
                <span style={{ fontSize: '46px', fontWeight: 900, color: '#1f2937', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '24px' }}>212.70</span>
                <button 
                  onClick={() => setIsRechargeModalOpen(true)}
                  style={{ 
                    backgroundColor: '#1f2937', color: 'white', fontSize: '15px', fontWeight: 'bold', 
                    padding: '14px 48px', borderRadius: '9999px', border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  立即充值
                </button>
              </div>

              {/* Stats Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', backgroundColor: '#f9fafb', borderRadius: '16px', padding: '16px' }}>
                 {/* Vertical Divider */}
                <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '1px', height: '24px', backgroundColor: '#e5e7eb' }}></div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 500, marginBottom: '4px' }}>昨日消耗</span>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937' }}>¥ 128.50</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 500, marginBottom: '4px' }}>今日已消费</span>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937' }}>¥ 11.20</span>
                </div>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px dashed #e5e7eb' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', marginBottom: '12px' }}>
                <Wallet size={24} />
              </div>
              <p style={{ color: '#6b7280', fontWeight: 500, fontSize: '14px' }}>
                {accountType === 'brand' ? '品牌账户' : '区域账户'}不支持查看余额
              </p>
            </div>
          )}
        </div>

        {/* Transaction History */}
        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', minHeight: '400px' }}>
          {/* Header & Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>资金明细</h2>
            <div style={{ backgroundColor: '#f3f4f6', padding: '4px', borderRadius: '10px', display: 'flex', fontSize: '13px', fontWeight: 500 }}>
              {['all', 'expense', 'income'].map(type => (
                <button 
                  key={type}
                  onClick={() => setFilterType(type)}
                  style={{ 
                    padding: '6px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                    backgroundColor: filterType === type ? 'white' : 'transparent',
                    color: filterType === type ? '#1f2937' : '#6b7280',
                    boxShadow: filterType === type ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none',
                    fontWeight: filterType === type ? 'bold' : 'normal'
                  }}
                >
                  {type === 'all' ? '全部' : type === 'expense' ? '支出' : '收入'}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Simplified grouping logic for demo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1f2937' }}>今天</h3>
                   <div style={{ height: '1px', flex: 1, backgroundColor: '#f9fafb' }}></div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {transactions.filter(t => filterType === 'all' || t.type === filterType).map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <div style={{ 
                          width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                          backgroundColor: item.type === 'income' ? '#ecfdf5' : '#f3f4f6',
                          color: item.type === 'income' ? '#10b981' : '#6b7280'
                        }}>
                          {item.type === 'income' ? <Wallet size={20} /> : <TrendingDown size={20} />}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                            <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937' }}>{item.title}</span>
                            {item.tags.map((tag, idx) => (
                              <span key={idx} style={{ fontSize: '10px', color: '#6b7280', backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500, letterSpacing: '-0.025em' }}>
                            {item.time.split(' ')[1]} <span style={{ margin: '0 4px', opacity: 0.5 }}>|</span> 单号: {item.orderId}
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '-0.025em', color: item.amountColor }}>
                        {item.amount}
                      </div>
                    </div>
                  ))}
               </div>
            </div>
            
            {transactions.filter(item => filterType === 'all' || item.type === filterType).length === 0 && (
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 0', color: '#9ca3af' }}>
                 <div style={{ width: '64px', height: '64px', backgroundColor: '#f9fafb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                   <div style={{ opacity: 0.2 }}>
                     <Wallet size={32} />
                   </div>
                 </div>
                 <span style={{ fontSize: '13px' }}>暂无资金明细</span>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* Reminder Modal */}
      {isReminderModalOpen && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 60, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setIsReminderModalOpen(false)}></div>
          <div style={{ backgroundColor: 'white', width: '100%', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', padding: '20px', paddingBottom: '32px', position: 'relative', zIndex: 10 }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>余额提醒设置</h3>
              <button onClick={() => setIsReminderModalOpen(false)} style={{ padding: '4px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer' }}>
                <X size={24} color="#9ca3af" />
              </button>
            </div>
            {/* Content omitted for brevity in demo but structure remains */}
            <button 
              onClick={() => setIsReminderModalOpen(false)}
              style={{ width: '100%', backgroundColor: '#111827', color: 'white', fontSize: '16px', fontWeight: 'bold', padding: '14px', borderRadius: '16px', border: 'none', marginTop: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              保存设置
            </button>
          </div>
        </div>
      )}

      {/* Recharge Modal */}
      {isRechargeModalOpen && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 60, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setIsRechargeModalOpen(false)}></div>
          <div style={{ backgroundColor: 'white', width: '100%', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', padding: '20px', paddingBottom: '32px', position: 'relative', zIndex: 10, maxHeight: '90%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>充值</h3>
              <button onClick={() => setIsRechargeModalOpen(false)} style={{ padding: '4px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer' }}>
                <X size={24} color="#9ca3af" />
              </button>
            </div>
            {/* Mock Amount Selection */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
                {[100, 200, 300, 500, 1000].map(amount => (
                    <button key={amount} onClick={() => setRechargeAmount(amount)} style={{ padding: '12px', borderRadius: '12px', border: rechargeAmount === amount ? '1px solid #1f2937' : '1px solid #e5e7eb', backgroundColor: rechargeAmount === amount ? '#1f2937' : 'white', color: rechargeAmount === amount ? 'white' : '#1f2937', fontWeight: 'bold' }}>
                        ¥ {amount}
                    </button>
                ))}
            </div>
            <button 
              onClick={() => { alert(`充值 ¥${rechargeAmount}`); setIsRechargeModalOpen(false); }}
              style={{ width: '100%', backgroundColor: '#111827', color: 'white', fontSize: '16px', fontWeight: 'bold', padding: '14px', borderRadius: '16px', border: 'none' }}
            >
              立即支付
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Component;
