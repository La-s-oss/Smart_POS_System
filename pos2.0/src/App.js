import React, { useState, useEffect, createContext, useContext } from 'react';
import { ShoppingCart, Package, TrendingUp, Users, BarChart3, Search, Scan, CreditCard, Trash2, Plus, Minus, X, DollarSign, Clock, AlertCircle, CheckCircle, Download, Printer, Home, User, Mail, Phone, LogOut, Lock } from 'lucide-react';

// ==================== CONTEXT & STATE MANAGEMENT ====================
const AppContext = createContext();

const initialProducts = [
  { id: 1, name: 'Espresso', price: 3.50, category: 'Coffee', stock: 50, barcode: '1001', cost: 1.20, description: 'Rich and bold espresso shot', color: 'from-amber-600 to-yellow-700' },
  { id: 2, name: 'Cappuccino', price: 4.50, category: 'Coffee', stock: 45, barcode: '1002', cost: 1.50, description: 'Creamy cappuccino with foam art', color: 'from-orange-500 to-amber-600' },
  { id: 3, name: 'Latte', price: 4.80, category: 'Coffee', stock: 40, barcode: '1003', cost: 1.60, description: 'Smooth and milky latte', color: 'from-yellow-600 to-orange-500' },
  { id: 4, name: 'Americano', price: 3.20, category: 'Coffee', stock: 55, barcode: '1004', cost: 1.00, description: 'Classic black coffee', color: 'from-stone-700 to-stone-900' },
  { id: 5, name: 'Mocha', price: 5.20, category: 'Coffee', stock: 35, barcode: '1005', cost: 1.80, description: 'Chocolate espresso blend', color: 'from-amber-700 to-stone-800' },
  { id: 6, name: 'Croissant', price: 3.20, category: 'Pastry', stock: 30, barcode: '2001', cost: 1.20, description: 'Buttery French pastry', color: 'from-amber-400 to-yellow-600' },
  { id: 7, name: 'Blueberry Muffin', price: 3.80, category: 'Pastry', stock: 25, barcode: '2002', cost: 1.50, description: 'Fresh baked muffin', color: 'from-indigo-400 to-purple-500' },
  { id: 8, name: 'Bagel', price: 2.80, category: 'Pastry', stock: 40, barcode: '2003', cost: 1.00, description: 'Plain or everything bagel', color: 'from-yellow-700 to-amber-800' },
  { id: 9, name: 'Danish', price: 4.20, category: 'Pastry', stock: 20, barcode: '2004', cost: 1.60, description: 'Sweet fruit danish', color: 'from-rose-400 to-pink-500' },
  { id: 10, name: 'Chocolate Cake', price: 5.50, category: 'Dessert', stock: 20, barcode: '3001', cost: 2.20, description: 'Rich chocolate layer cake', color: 'from-amber-900 to-stone-900' },
  { id: 11, name: 'Cheesecake', price: 6.00, category: 'Dessert', stock: 18, barcode: '3002', cost: 2.50, description: 'New York style cheesecake', color: 'from-yellow-200 to-amber-300' },
  { id: 12, name: 'Cookie Box', price: 6.00, category: 'Dessert', stock: 15, barcode: '3003', cost: 2.00, description: 'Assorted cookie box', color: 'from-orange-600 to-amber-700' },
  { id: 13, name: 'Sandwich', price: 7.50, category: 'Food', stock: 35, barcode: '4001', cost: 3.50, description: 'Fresh deli sandwich', color: 'from-lime-500 to-green-600' },
  { id: 14, name: 'Salad Bowl', price: 8.50, category: 'Food', stock: 25, barcode: '4002', cost: 4.00, description: 'Mixed green salad', color: 'from-green-500 to-emerald-600' },
  { id: 15, name: 'Wrap', price: 7.00, category: 'Food', stock: 30, barcode: '4003', cost: 3.20, description: 'Chicken wrap', color: 'from-yellow-500 to-orange-500' },
  { id: 16, name: 'Green Tea', price: 2.80, category: 'Tea', stock: 60, barcode: '5001', cost: 0.80, description: 'Premium green tea', color: 'from-green-400 to-emerald-500' },
  { id: 17, name: 'Earl Grey', price: 3.00, category: 'Tea', stock: 55, barcode: '5002', cost: 0.90, description: 'Classic Earl Grey', color: 'from-slate-600 to-gray-700' },
  { id: 18, name: 'Chai Latte', price: 4.50, category: 'Tea', stock: 40, barcode: '5003', cost: 1.50, description: 'Spiced chai latte', color: 'from-orange-400 to-red-500' },
  { id: 19, name: 'Orange Juice', price: 4.20, category: 'Beverage', stock: 40, barcode: '6001', cost: 1.50, description: 'Fresh squeezed OJ', color: 'from-orange-400 to-orange-600' },
  { id: 20, name: 'Smoothie', price: 5.50, category: 'Beverage', stock: 35, barcode: '6002', cost: 2.00, description: 'Mixed fruit smoothie', color: 'from-pink-400 to-purple-500' },
];

const initialCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0101', totalSpent: 245.80, visits: 12, loyaltyPoints: 246 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0102', totalSpent: 189.50, visits: 8, loyaltyPoints: 190 },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '555-0103', totalSpent: 456.20, visits: 21, loyaltyPoints: 456 },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '555-0104', totalSpent: 123.40, visits: 5, loyaltyPoints: 123 },
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', phone: '555-0105', totalSpent: 567.90, visits: 28, loyaltyPoints: 568 },
];

const initialEmployees = [
  { id: 1, username: 'admin', password: 'admin123', name: 'Admin User', role: 'Manager', email: 'admin@store.com' },
  { id: 2, username: 'cashier1', password: 'cashier123', name: 'Alice Johnson', role: 'Cashier', email: 'alice@store.com' },
  { id: 3, username: 'cashier2', password: 'cashier123', name: 'Bob Smith', role: 'Cashier', email: 'bob@store.com' },
];
function AppProvider({ children }) {
  // State with localStorage persistence
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('pos_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });
  
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem('pos_customers');
    return saved ? JSON.parse(saved) : initialCustomers;
  });
  
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('pos_transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [employees] = useState(initialEmployees);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('pos_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('pos_customers', JSON.stringify(customers));
  }, [customers]);

  useEffect(() => {
    localStorage.setItem('pos_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const login = (username, password) => {
    const employee = employees.find(e => e.username === username && e.password === password);
    if (employee) {
      setCurrentUser(employee);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setCart([]);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  const getCartSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getCartTax = () => {
    return getCartSubtotal() * 0.1;
  };

  const completeTransaction = (paymentMethod, customerName = 'Walk-in', customerId = null, amountPaid = 0) => {
    const subtotal = getCartSubtotal();
    const tax = getCartTax();
    const total = subtotal + tax;

    const newTransaction = {
      id: `TXN${Date.now()}`,
      transactionId: `TXN${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${String(transactions.length + 1).padStart(4, '0')}`,
      date: new Date().toISOString(),
      items: cart.map(item => ({ ...item, subtotal: item.price * item.quantity })),
      itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      tax,
      total,
      paymentMethod,
      amountPaid: paymentMethod === 'Cash' ? amountPaid : total,
      change: paymentMethod === 'Cash' ? Math.max(0, amountPaid - total) : 0,
      customer: customerName,
      customerId,
      cashier: currentUser.name,
      status: 'completed'
    };

    const updatedProducts = products.map(product => {
      const cartItem = cart.find(item => item.id === product.id);
      if (cartItem) {
        return { ...product, stock: Math.max(0, product.stock - cartItem.quantity) };
      }
      return product;
    });
    setProducts(updatedProducts);

    if (customerId) {
      const updatedCustomers = customers.map(customer => {
        if (customer.id === customerId) {
          return {
            ...customer,
            totalSpent: customer.totalSpent + total,
            visits: customer.visits + 1,
            loyaltyPoints: customer.loyaltyPoints + Math.floor(total)
          };
        }
        return customer;
      });
      setCustomers(updatedCustomers);
    }

    setTransactions(prev => [newTransaction, ...prev]);
    clearCart();
    return newTransaction;
  };

  const value = {
    products, customers, transactions, cart, currentUser, employees,
    addToCart, removeFromCart, updateQuantity, clearCart,
    getCartSubtotal, getCartTax, completeTransaction, login, logout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useApp() {
  return useContext(AppContext);
}

// Main App
export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

function MainApp() {
  const { currentUser } = useApp();
  
  if (!currentUser) {
    return <LoginPage />;
  }
  
  return <CompletePOSSystem />;
}// ==================== LOGIN PAGE ====================
function LoginPage() {
  const { login } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (login(username, password)) {
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold mb-2">ModernPOS</h1>
          <p className="text-blue-100">Enterprise Edition</p>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Employee Login</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition"
                placeholder="Enter username"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition"
                placeholder="Enter password"
              />
            </div>
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <Lock className="w-5 h-5" />
            <span>Sign In</span>
          </button>
          
          <div className="mt-6 p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-600 mb-2 font-semibold">Demo Accounts:</p>
            <div className="space-y-1 text-xs text-slate-500">
              <p>Manager: admin / admin123</p>
              <p>Cashier: cashier1 / cashier123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompletePOSSystem() {
  const [currentPage, setCurrentPage] = useState('pos');
  const { products } = useApp();
  const lowStockCount = products.filter(p => p.stock <= 15).length;

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} lowStockCount={lowStockCount} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavBar lowStockCount={lowStockCount} />
        <div className="flex-1 overflow-auto">
          {currentPage === 'pos' && <POSPage />}
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'inventory' && <InventoryPage />}
          {currentPage === 'reports' && <ReportsPage />}
          {currentPage === 'customers' && <CustomersPage />}
        </div>
      </div>
    </div>
  );
}

// ==================== TOP NAV ====================
function TopNavBar({ lowStockCount }) {
  const { currentUser, products, logout } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-slate-600">
          <Clock className="w-5 h-5" />
          <span className="text-sm font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 hover:bg-slate-100 rounded-lg transition">
              <AlertCircle className="w-5 h-5 text-slate-600" />
              {lowStockCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{lowStockCount}</span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border z-50">
                <div className="p-4 border-b"><h3 className="font-bold">Notifications</h3></div>
                <div className="max-h-96 overflow-auto">
                  {products.filter(p => p.stock <= 15).map(product => (
                    <div key={product.id} className="p-4 border-b hover:bg-slate-50">
                      <div className="flex space-x-3">
                        <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-slate-600">Low stock: {product.stock} units</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">{currentUser.name}</p>
                <p className="text-xs text-slate-500">{currentUser.role}</p>
              </div>
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border z-50">
                <div className="p-4 border-b">
                  <p className="font-semibold">{currentUser.name}</p>
                  <p className="text-sm text-slate-500">{currentUser.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center space-x-3 text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}// ==================== SIDEBAR ====================
function Sidebar({ currentPage, setCurrentPage, lowStockCount }) {
  const menuItems = [
    { id: 'pos', icon: ShoppingCart, label: 'Point of Sale', color: 'text-blue-600' },
    { id: 'dashboard', icon: Home, label: 'Dashboard', color: 'text-green-600' },
    { id: 'inventory', icon: Package, label: 'Inventory', color: 'text-purple-600', badge: lowStockCount },
    { id: 'reports', icon: BarChart3, label: 'Reports', color: 'text-orange-600' },
    { id: 'customers', icon: Users, label: 'Customers', color: 'text-pink-600' },
  ];

  return (
    <div className="w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <ShoppingCart className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ModernPOS</h1>
            <p className="text-xs text-slate-400">Enterprise Edition</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
              currentPage === item.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg scale-105' : 'hover:bg-slate-700/50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className={`w-5 h-5 ${currentPage === item.id ? 'text-white' : item.color}`} />
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge > 0 && <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">{item.badge}</span>}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-700">
        <div className="bg-slate-700/50 rounded-lg p-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">System Status</span>
            <span className="flex items-center text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}// ==================== POS PAGE ====================
function POSPage() {
  const { products, addToCart } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [barcodeInput, setBarcodeInput] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.barcode.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handleBarcodeInput = (e) => {
    if (e.key === 'Enter' && barcodeInput) {
      const product = products.find(p => p.barcode === barcodeInput);
      if (product) {
        addToCart(product);
        setBarcodeInput('');
      }
    }
  };

  return (
    <div className="h-full flex">
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Point of Sale</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition"
            />
          </div>
          <div className="relative">
            <Scan className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Scan barcode..."
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              onKeyPress={handleBarcodeInput}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 outline-none transition"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === cat ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
      <CartPanel showPayment={showPayment} setShowPayment={setShowPayment} />
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useApp();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    if (product.stock <= 0) return;
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <div onClick={handleAdd} className={`bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all border-2 ${
      product.stock > 0 ? 'cursor-pointer hover:border-blue-400' : 'opacity-60 cursor-not-allowed'
    } ${isAdding ? 'scale-95' : 'hover:scale-105'}`}>
      <div className={`h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <circle cx="40" cy="40" r="25" className="fill-blue-200" />
          <circle cx="160" cy="50" r="20" className="fill-indigo-200" />
          <rect x="120" y="120" width="50" height="50" className="fill-blue-300" transform="rotate(45 145 145)" />
          <polygon points="30,150 50,180 10,180" className="fill-indigo-300" />
          <circle cx="160" cy="160" r="18" className="fill-blue-200" />
          <rect x="10" y="90" width="30" height="30" className="fill-indigo-200" rx="5" />
        </svg>
        <Package className="w-16 h-16 text-blue-500 relative z-10" />
      </div>
      <h3 className="font-bold text-slate-800 text-lg mb-2 line-clamp-2">{product.name}</h3>
      <p className="text-sm text-slate-500 mb-3">{product.category}</p>
      <div className="flex justify-between items-end">
        <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
        <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
          product.stock > 20 ? 'bg-green-100 text-green-700' : 
          product.stock > 10 ? 'bg-yellow-100 text-yellow-700' : 
          product.stock > 0 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
        }`}>
          {product.stock > 0 ? `Stock: ${product.stock}` : 'Out'}
        </span>
      </div>
    </div>
  );
}

// ==================== CART PANEL ====================
function CartPanel({ showPayment, setShowPayment }) {
  const { cart, removeFromCart, updateQuantity, getCartSubtotal, getCartTax, clearCart } = useApp();
  const subtotal = getCartSubtotal();
  const tax = getCartTax();
  const total = subtotal + tax;

  return (
    <div className="w-96 bg-white shadow-2xl flex flex-col">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold">Current Order</h3>
          <ShoppingCart className="w-6 h-6" />
        </div>
        <p className="text-blue-100">{cart.length} items • {cart.reduce((sum, item) => sum + item.quantity, 0)} units</p>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-20 h-20 mx-auto text-slate-300 mb-4" />
            <p className="text-slate-400">Cart is empty</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="bg-slate-50 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-sm font-bold text-white">{item.name.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{item.name}</h4>
                    <p className="text-sm text-slate-500">${item.price.toFixed(2)} each</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 bg-white rounded-lg p-1">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded transition">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded transition">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-lg font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="p-6 border-t-2 bg-slate-50">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold">${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Tax (10%)</span><span className="font-semibold">${tax.toFixed(2)}</span></div>
            <div className="flex justify-between text-2xl font-bold pt-3 border-t-2">
              <span>Total</span><span className="text-blue-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-2">
            <button onClick={() => setShowPayment(true)} className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <CreditCard className="w-5 h-5" /><span>Proceed to Payment</span>
            </button>
            <button onClick={clearCart} className="w-full py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300 transition">Clear Cart</button>
          </div>
        </div>
      )}
      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </div>
  );
}// ==================== PAYMENT MODAL ====================
function PaymentModal({ onClose }) {
  const { getCartSubtotal, getCartTax, completeTransaction, customers } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [amountPaid, setAmountPaid] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const total = getCartSubtotal() + getCartTax();
  const change = paymentMethod === 'cash' && amountPaid ? Math.max(0, parseFloat(amountPaid) - total) : 0;

  const handlePayment = () => {
    if (paymentMethod === 'cash' && (!amountPaid || parseFloat(amountPaid) < total)) {
      alert('Insufficient payment');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      const txn = completeTransaction(
        paymentMethod === 'card' ? 'Card' : 'Cash',
        selectedCustomer ? customers.find(c => c.id === selectedCustomer)?.name : 'Walk-in',
        selectedCustomer,
        paymentMethod === 'cash' ? parseFloat(amountPaid) : total
      );
      setReceipt(txn);
      setIsProcessing(false);
    }, 1500);
  };

  const downloadPDF = () => {
    const content = generateReceiptText(receipt);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${receipt.transactionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printReceipt = () => {
    const content = generateReceiptHTML(receipt);
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  if (receipt) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md m-4 max-h-[90vh] overflow-auto">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-2xl font-bold">Receipt</h3>
            <button onClick={onClose} className="hover:bg-slate-100 p-2 rounded-lg transition"><X className="w-6 h-6" /></button>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
              <p className="text-slate-600">Transaction #{receipt.transactionId}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-2 text-sm">
              <div className="flex justify-between"><span>Customer</span><span className="font-medium">{receipt.customer}</span></div>
              <div className="flex justify-between"><span>Cashier</span><span className="font-medium">{receipt.cashier}</span></div>
              <div className="flex justify-between"><span>Payment</span><span className="font-medium">{receipt.paymentMethod}</span></div>
              <div className="flex justify-between"><span>Date</span><span className="font-medium">{new Date(receipt.date).toLocaleString()}</span></div>
            </div>
            <div className="border-t border-b py-4 mb-4">
              <h4 className="font-semibold mb-3">Items</h4>
              {receipt.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm mb-2">
                  <div><span>{item.name}</span><span className="text-slate-500 ml-2">x{item.quantity}</span></div>
                  <span>${item.subtotal.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between"><span>Subtotal</span><span>${receipt.subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Tax</span><span>${receipt.tax.toFixed(2)}</span></div>
              {receipt.paymentMethod === 'Cash' && (
                <>
                  <div className="flex justify-between"><span>Amount Paid</span><span>${receipt.amountPaid.toFixed(2)}</span></div>
                  <div className="flex justify-between text-green-600 font-semibold"><span>Change</span><span>${receipt.change.toFixed(2)}</span></div>
                </>
              )}
              <div className="flex justify-between text-xl font-bold pt-2 border-t">
                <span>Total</span><span className="text-blue-600">${receipt.total.toFixed(2)}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={printReceipt} className="py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300 transition flex items-center justify-center space-x-2">
                <Printer className="w-4 h-4" /><span>Print</span>
              </button>
              <button onClick={downloadPDF} className="py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300 transition flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" /><span>Download</span>
              </button>
            </div>
            <button onClick={onClose} className="w-full mt-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition">Done</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md m-4">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-2xl font-bold">Payment</h3>
          <button onClick={onClose} className="hover:bg-slate-100 p-2 rounded-lg transition"><X className="w-6 h-6" /></button>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
            <p className="text-sm text-slate-600 mb-1">Total Amount</p>
            <p className="text-4xl font-bold text-blue-600">${total.toFixed(2)}</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Customer</label>
            <select value={selectedCustomer || ''} onChange={(e) => setSelectedCustomer(e.target.value ? parseInt(e.target.value) : null)} className="w-full px-4 py-3 rounded-xl border-2 focus:border-blue-500 outline-none transition">
              <option value="">Walk-in</option>
              {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-3">Payment Method</label>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setPaymentMethod('card')} className={`p-4 rounded-xl border-2 transition ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}`}>
                <CreditCard className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'card' ? 'text-blue-600' : 'text-slate-400'}`} />
                <p className="font-medium">Card</p>
              </button>
              <button onClick={() => setPaymentMethod('cash')} className={`p-4 rounded-xl border-2 transition ${paymentMethod === 'cash' ? 'border-green-500 bg-green-50' : 'border-slate-200 hover:bg-slate-50'}`}>
                <DollarSign className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'cash' ? 'text-green-600' : 'text-slate-400'}`} />
                <p className="font-medium">Cash</p>
              </button>
            </div>
          </div>
          {paymentMethod === 'cash' && (
            <div>
              <label className="block text-sm font-medium mb-2">Amount Paid</label>
              <input type="number" step="0.01" value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 focus:border-green-500 outline-none transition" placeholder="0.00" />
              {amountPaid && parseFloat(amountPaid) >= total && (
                <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                  Change: <span className="font-bold">${change.toFixed(2)}</span>
                </div>
              )}
            </div>
          )}
          <button onClick={handlePayment} disabled={isProcessing} className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold disabled:opacity-50 flex items-center justify-center space-x-2 hover:shadow-lg transition">
            {isProcessing ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Processing...</span></> : <><CheckCircle className="w-5 h-5" /><span>Complete Payment</span></>}
          </button>
        </div>
      </div>
    </div>
  );
}

function generateReceiptText(receipt) {
  return `
========================================
          MODERNPOS RECEIPT
========================================

Transaction: ${receipt.transactionId}
Date: ${new Date(receipt.date).toLocaleString()}
Cashier: ${receipt.cashier}
Customer: ${receipt.customer}

----------------------------------------
ITEMS
----------------------------------------
${receipt.items.map(item => 
  `${item.name} x${item.quantity}
  $${item.price.toFixed(2)} each = $${item.subtotal.toFixed(2)}`
).join('\n')}

----------------------------------------
Subtotal:           $${receipt.subtotal.toFixed(2)}
Tax (10%):          $${receipt.tax.toFixed(2)}
----------------------------------------
TOTAL:              $${receipt.total.toFixed(2)}
${receipt.paymentMethod === 'Cash' ? `
Amount Paid:        $${receipt.amountPaid.toFixed(2)}
Change:             $${receipt.change.toFixed(2)}
` : ''}
Payment Method:     ${receipt.paymentMethod}

========================================
      Thank you for your business!
========================================
  `;
}

function generateReceiptHTML(receipt) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Receipt - ${receipt.transactionId}</title>
      <style>
        body { font-family: monospace; padding: 20px; max-width: 400px; margin: 0 auto; }
        h1 { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; }
        .info { margin: 20px 0; }
        .items { margin: 20px 0; }
        .item { display: flex; justify-content: space-between; margin: 5px 0; }
        .totals { border-top: 2px solid #000; padding-top: 10px; }
        .total-line { display: flex; justify-content: space-between; margin: 5px 0; }
        .grand-total { font-size: 1.2em; font-weight: bold; border-top: 2px solid #000; margin-top: 10px; padding-top: 10px; }
        .footer { text-align: center; margin-top: 20px; border-top: 2px solid #000; padding-top: 10px; }
      </style>
    </head>
    <body>
      <h1>MODERNPOS RECEIPT</h1>
      <div class="info">
        <div>Transaction: ${receipt.transactionId}</div>
        <div>Date: ${new Date(receipt.date).toLocaleString()}</div>
        <div>Cashier: ${receipt.cashier}</div>
        <div>Customer: ${receipt.customer}</div>
      </div>
      <div class="items">
        <h3>ITEMS</h3>
        ${receipt.items.map(item => `
          <div class="item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${item.subtotal.toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
      <div class="totals">
        <div class="total-line"><span>Subtotal:</span><span>$${receipt.subtotal.toFixed(2)}</span></div>
        <div class="total-line"><span>Tax (10%):</span><span>$${receipt.tax.toFixed(2)}</span></div>
        ${receipt.paymentMethod === 'Cash' ? `
          <div class="total-line"><span>Amount Paid:</span><span>$${receipt.amountPaid.toFixed(2)}</span></div>
          <div class="total-line"><span>Change:</span><span>$${receipt.change.toFixed(2)}</span></div>
        ` : ''}
        <div class="total-line grand-total"><span>TOTAL:</span><span>$${receipt.total.toFixed(2)}</span></div>
        <div class="total-line"><span>Payment:</span><span>${receipt.paymentMethod}</span></div>
      </div>
      <div class="footer">
        <p>Thank you for your business!</p>
      </div>
    </body>
    </html>
  `;
}// ==================== DASHBOARD ====================
function DashboardPage() {
  const { transactions, products } = useApp();
  const today = new Date().toDateString();
  const todayTxn = transactions.filter(t => new Date(t.date).toDateString() === today);
  const todayRevenue = todayTxn.reduce((sum, t) => sum + t.total, 0);
  const avgTxn = todayTxn.length > 0 ? todayRevenue / todayTxn.length : 0;

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    const dayTxn = transactions.filter(t => new Date(t.date).toDateString() === date.toDateString());
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      revenue: dayTxn.reduce((sum, t) => sum + t.total, 0),
      count: dayTxn.length
    };
  });
  const maxRevenue = Math.max(...last7Days.map(d => d.revenue), 1);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard title="Today's Revenue" value={`$${todayRevenue.toFixed(2)}`} icon={DollarSign} color="blue" />
        <StatCard title="Transactions" value={todayTxn.length} icon={ShoppingCart} color="green" />
        <StatCard title="Avg Transaction" value={`$${avgTxn.toFixed(2)}`} icon={TrendingUp} color="purple" />
        <StatCard title="Low Stock" value={products.filter(p => p.stock <= 15).length} icon={AlertCircle} color="orange" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Sales Overview</h3>
          <div className="h-64 flex items-end justify-around space-x-2">
            {last7Days.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all" style={{ height: `${(day.revenue / maxRevenue) * 200}px`, minHeight: '10px' }} />
                <span className="text-xs text-slate-500 mt-2">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
          <div className="space-y-3 max-h-64 overflow-auto">
            {transactions.slice(0, 5).map(txn => (
              <div key={txn.id} className="flex justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                <div>
                  <p className="font-semibold">{txn.customer}</p>
                  <p className="text-xs text-slate-500">{new Date(txn.date).toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">${txn.total.toFixed(2)}</p>
                  <p className="text-xs text-slate-500">{txn.itemCount} items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }) {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <div className={`w-12 h-12 bg-gradient-to-br ${colors[color]} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-slate-600 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}// ==================== INVENTORY ====================
function InventoryPage() {
  const { products } = useApp();
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Inventory Management</h2>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              {['Product', 'Category', 'Price', 'Stock', 'Status'].map(h => (
                <th key={h} className="px-6 py-4 text-left text-sm font-bold text-slate-700">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} className={`border-t hover:bg-slate-50 transition ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${p.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-sm font-bold text-white">{p.name.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{p.name}</p>
                      <p className="text-xs text-slate-500">{p.barcode}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{p.category}</td>
                <td className="px-6 py-4 font-semibold text-blue-600">${p.price.toFixed(2)}</td>
                <td className="px-6 py-4 font-semibold">{p.stock}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    p.stock > 20 ? 'bg-green-100 text-green-700' : p.stock > 10 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {p.stock > 20 ? 'In Stock' : p.stock > 10 ? 'Low' : 'Critical'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==================== REPORTS ====================
function ReportsPage() {
  const { transactions } = useApp();
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Reports & Analytics</h2>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Transaction History</h3>
        <div className="space-y-2">
          {transactions.map(txn => (
            <div key={txn.id} className="flex justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition">
              <div>
                <p className="font-semibold">{txn.customer}</p>
                <p className="text-sm text-slate-500">{new Date(txn.date).toLocaleString()}</p>
                <p className="text-xs text-slate-400">By {txn.cashier}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-blue-600">${txn.total.toFixed(2)}</p>
                <p className="text-sm text-slate-500">{txn.itemCount} items • {txn.paymentMethod}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== CUSTOMERS ====================
function CustomersPage() {
  const { customers } = useApp();
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Customer Management</h2>
      <div className="grid grid-cols-3 gap-6">
        {customers.map(c => (
          <div key={c.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{c.name}</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" /><span>{c.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" /><span>{c.phone}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">${c.totalSpent.toFixed(0)}</p>
                <p className="text-xs text-slate-500">Total Spent</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">{c.loyaltyPoints}</p>
                <p className="text-xs text-slate-500">Points</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}