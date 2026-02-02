import React from 'react';

// Axhub 要求的组件形式：const Component = ...
// 注意：此文件是为了满足 Axhub 原型组件要求而生成的独立组件。
// 包含了内联样式和内置图标，移除了外部依赖。

const Component = () => {
  // 模拟 hooks (Axhub 环境通常内置 React)
  // const [state, setState] = React.useState(...);
  // 导航在 Axhub 中可能需要特定处理，这里仅保留点击事件
  const handleNavigate = (path) => {
    console.log('Navigate to:', path);
  };

  // --- 图标组件定义 (替换 Lucide 图标) ---
  const ChevronRight = ({ size = 20, color = "#9ca3af" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const ArrowLeftRight = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3 4 7l4 4"></path>
      <path d="M4 7h16"></path>
      <path d="m16 21 4-4-4-4"></path>
      <path d="M20 17H4"></path>
    </svg>
  );

  const Settings = ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const Smartphone = ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );

  const Headphones = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
  );

  const MessageSquareText = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  const WeChatIcon = ({ grayscale = false }) => (
    <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%', padding: '3px', fill: grayscale ? '#d1d5db' : 'white' }}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fillRule="evenodd"/>
      <path d="M17 10c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4zm-6.5 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" opacity="0.9"/>
    </svg>
  );

  const AliPayIcon = ({ grayscale = false }) => (
    <div style={{
      width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: grayscale ? '#f3f4f6' : '#1677ff', color: grayscale ? '#d1d5db' : 'white',
      fontWeight: 'bold', fontSize: '11px', borderRadius: '50%'
    }}>
      支
    </div>
  );

  // 模拟动物图标
  const Rabbit = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
  );
  const ShoppingBag = ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16"/></svg>
  );
  const Dog = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
  );
  const Music = ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l12-2v13"/></svg>
  );

  const MeituanIcon = ({ grayscale = false }) => (
    <div style={{
      width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: grayscale ? '#f3f4f6' : '#ffc300', color: grayscale ? '#d1d5db' : '#1f2937',
      borderRadius: '50%'
    }}>
      <Rabbit size={14} />
    </div>
  );

  const TaobaoIcon = ({ grayscale = false }) => (
    <div style={{
      width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: grayscale ? '#f3f4f6' : '#ff5000', color: grayscale ? '#d1d5db' : 'white',
      borderRadius: '50%'
    }}>
      <ShoppingBag size={12} />
    </div>
  );

  const JDIcon = ({ grayscale = false }) => (
    <div style={{
      width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: grayscale ? '#f3f4f6' : '#e1251b', color: grayscale ? '#d1d5db' : 'white',
      borderRadius: '50%'
    }}>
      <Dog size={14} />
    </div>
  );

  const DouyinIcon = ({ grayscale = false }) => (
    <div style={{
      width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: grayscale ? '#f3f4f6' : '#1f2937', color: grayscale ? '#d1d5db' : 'white',
      borderRadius: '50%'
    }}>
      <Music size={12} />
    </div>
  );

  // --- 主渲染 ---
  return (
    <div style={{ height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F6F8', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* StatusBar 模拟 */}
      <div style={{ height: '44px', width: '100%', backgroundColor: 'transparent', position: 'relative', zIndex: 50 }}>
        {/* 这里省略 StatusBar 内容，保持布局 */}
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflowY: 'auto', position: 'relative', width: '100%', paddingBottom: '80px' }}>
        
        {/* Top Header Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '280px', zIndex: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #60a5fa, #bfdbfe, #F5F6F8)' }}></div>
          {/* Clouds */}
          <div style={{ position: 'absolute', top: '40px', right: '-20px', width: '128px', height: '128px', backgroundColor: 'rgba(255,255,255,0.2)', filter: 'blur(40px)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', top: '80px', left: '-20px', width: '160px', height: '160px', backgroundColor: 'rgba(255,255,255,0.1)', filter: 'blur(50px)', borderRadius: '50%' }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, padding: '0 12px', paddingTop: '8px' }}>
          
          {/* Unified Profile & Notification Card */}
          <div style={{ backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: '12px', position: 'relative', marginTop: '48px' }}>
            <div style={{ padding: '20px', paddingBottom: '16px', position: 'relative' }}>
              
              {/* Weather Area */}
              <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 0, height: '80px', width: '200px', pointerEvents: 'none', overflow: 'hidden', borderTopRightRadius: '24px' }}>
                <div style={{ 
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to bottom left, rgba(239,246,255,0.8), rgba(255,255,255,0.5), transparent)',
                  backdropFilter: 'blur(1px)',
                  clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 0)'
                }}></div>
                <div style={{ position: 'absolute', top: '16px', right: '20px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', fontSize: '12px', fontWeight: 500, color: '#4b5563', marginBottom: '4px' }}>
                    <span>肥西县</span>
                    <span>13/-1°C</span>
                    <span>晴天</span>
                    <div style={{ position: 'relative', width: '20px', height: '20px' }}>
                      <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' }}>
                        <circle cx="12" cy="12" r="6" fill="#f59e0b" />
                        <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                           <line x1="12" y1="1" x2="12" y2="3" />
                           <line x1="12" y1="21" x2="12" y2="23" />
                           <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                           <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                           <line x1="1" y1="12" x2="3" y2="12" />
                           <line x1="21" y1="12" x2="23" y2="12" />
                           <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                           <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div style={{ fontSize: '10px', color: '#9ca3af', letterSpacing: '0.025em', transform: 'scale(0.95)', transformOrigin: 'right', fontWeight: 500, opacity: 0.8 }}>保持热爱，奔赴山海~</div>
                </div>
              </div>

              {/* Avatar */}
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', 
                border: '3px solid white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
                position: 'absolute', top: '-32px', left: '20px', zIndex: 20, backgroundColor: 'white' 
              }}>
                <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', marginTop: '32px', position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: '18px', fontWeight: 900, color: '#1a1a1a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', letterSpacing: '-0.025em' }}>
                  张晓毅测试 (别动...
                </h1>
                <ArrowLeftRight size={14} color="#9ca3af" />
              </div>

              {/* Info Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   {/* Tags */}
                   <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ 
                        background: 'linear-gradient(to right, #eeb46e, #dfa055)', color: 'white', 
                        fontSize: '11px', padding: '2px 6px', borderRadius: '4px', 
                        display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
                      }}>
                         <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px', width: '12px', height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 'bold' }}>¥</div>
                         <span style={{ fontWeight: 'bold', textShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>餐饮 2.0</span>
                      </div>
                      <div style={{ 
                        backgroundColor: 'white', color: '#15803d', fontSize: '11px', padding: '2px 4px', 
                        borderRadius: '4px', border: '1px solid #dcfce7', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
                      }}>
                         <div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '6px', height: '6px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                         </div>
                         <span style={{ fontWeight: 'bold', color: '#374151' }}>门店档案</span>
                         <ChevronRight size={12} color="#9ca3af" />
                      </div>
                   </div>

                   {/* Payment Icons */}
                   <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#07c160', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                         <WeChatIcon />
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                         <AliPayIcon />
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                         <MeituanIcon grayscale />
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                         <TaobaoIcon grayscale />
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                         <JDIcon grayscale />
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                         <DouyinIcon grayscale />
                      </div>
                   </div>
                </div>

                {/* Operating Status Box */}
                <div style={{ 
                  background: 'linear-gradient(to bottom right, #ecfdf5, #d1fae5)', border: '1px solid #dcfce7', 
                  borderRadius: '12px', width: '100px', height: '64px', display: 'flex', flexDirection: 'column', 
                  alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
                }}>
                   {/* Hanger Detail */}
                   <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '8px', borderTop: '2px solid #dcfce7', borderLeft: '2px solid #dcfce7', borderRight: '2px solid #dcfce7', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px' }}></div>
                   <div style={{ position: 'absolute', top: '-3px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', backgroundColor: 'white', border: '1px solid #dcfce7', borderRadius: '50%', zIndex: 10 }}></div>
                   
                   <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#15803d', marginBottom: '2px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#16a34a', borderRadius: '50%' }}></div>
                      <span style={{ fontWeight: 'bold', fontSize: '14px', letterSpacing: '0.025em' }}>营业中</span>
                   </div>
                   <div style={{ fontSize: '11px', color: 'rgba(22, 163, 74, 0.8)', fontWeight: 500 }}>全天营业</div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Fees Card */}
          <div 
            onClick={() => handleNavigate('/delivery-balance')}
            style={{ 
              backgroundColor: 'white', borderRadius: '3px', padding: '20px', 
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)', marginBottom: '12px', position: 'relative', 
              overflow: 'hidden', height: '116px', cursor: 'pointer', transition: 'transform 0.1s' 
            }}
          >
             {/* Lightning Icon Background */}
             <div style={{ position: 'absolute', top: '-12px', right: '-12px', color: '#fefce8', pointerEvents: 'none' }}>
                <svg width="130" height="130" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(12deg)' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
             </div>

             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'relative', zIndex: 10 }}>
                <span style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '14px' }}>门店费用</span>
                <ChevronRight size={20} color="#d1d5db" />
             </div>
             <div style={{ marginBottom: '2px', position: 'relative', zIndex: 10, display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', marginRight: '2px' }}>¥</span>
                <span style={{ fontSize: '32px', fontWeight: 900, color: '#111827', letterSpacing: '-0.05em' }}>0</span>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', marginLeft: '2px', transform: 'translateY(-5px)' }}>.01</span>
             </div>
             <div style={{ fontSize: '12px', color: '#9ca3af', position: 'relative', zIndex: 10, fontWeight: 500 }}>配送余额</div>
          </div>

          {/* Store Equipment */}
          <div style={{ 
            backgroundColor: 'white', borderRadius: '3px', padding: '16px 20px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)', marginBottom: '12px', 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' 
          }}>
             <span style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '14px' }}>门店设备</span>
             <ChevronRight size={20} color="#d1d5db" />
          </div>

          {/* Grid Actions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
             <div style={{ backgroundColor: 'white', borderRadius: '3px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '90px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                   <span style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '14px' }}>经营设置</span>
                   <ChevronRight size={18} color="#d1d5db" />
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>常用经营集合地</div>
             </div>
             <div style={{ backgroundColor: 'white', borderRadius: '3px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '90px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                   <span style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '14px' }}>员工管理</span>
                   <ChevronRight size={18} color="#d1d5db" />
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>21人</div>
             </div>
          </div>

          {/* Service & Feedback */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
             <div style={{ backgroundColor: 'white', borderRadius: '3px', padding: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '12px', height: '76px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', flexShrink: 0 }}>
                   <Headphones size={24} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                   <div style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '14px', marginBottom: '2px' }}>我的客服</div>
                   <div style={{ fontSize: '12px', color: '#9ca3af' }}>专属服务</div>
                </div>
             </div>
             <div style={{ backgroundColor: 'white', borderRadius: '3px', padding: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '12px', height: '76px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', flexShrink: 0 }}>
                   <MessageSquareText size={24} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                   <div style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '14px', marginBottom: '2px' }}>建议反馈</div>
                   <div style={{ fontSize: '12px', color: '#9ca3af' }}>有问题随时问</div>
                </div>
             </div>
          </div>

          {/* Settings List */}
          <div style={{ backgroundColor: 'white', borderRadius: '3px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', marginBottom: '24px', overflow: 'hidden' }}>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #f9fafb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                      <Settings size={20} />
                   </div>
                   <span style={{ color: '#1f2937', fontSize: '14px', fontWeight: 'bold' }}>系统设置</span>
                </div>
                <ChevronRight size={20} color="#d1d5db" />
             </div>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                      <Smartphone size={20} />
                   </div>
                   <span style={{ color: '#1f2937', fontSize: '14px', fontWeight: 'bold' }}>登录设备</span>
                </div>
                <ChevronRight size={20} color="#d1d5db" />
             </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Nav Placeholder */}
      <div style={{ height: '50px', backgroundColor: 'white', borderTop: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'relative', zIndex: 100 }}>
        <span style={{ fontSize: '10px', color: '#9ca3af' }}>底部导航栏 (BottomNav)</span>
      </div>
    </div>
  );
};

export default Component;
