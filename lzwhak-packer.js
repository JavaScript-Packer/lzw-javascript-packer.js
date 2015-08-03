function lzwhak(r) {
  var e = {
    _:"WHAK+com/PaCker=BDEFGIJLMNOQRSTUVXYZbdfghijlnpqstuvwxyz0123456789",
    _f:String.fromCharCode,
    pak:function(r) {
      if (null == r) return "";
      var t, o, a, n, c, h, f, i = "", d = 0;
      for (r = e.compress(r); d < 2 * r.length; ) 0 == d % 2 ? (t = r.charCodeAt(d / 2) >> 8, 
      o = 255 & r.charCodeAt(d / 2), a = d / 2 + 1 < r.length ? r.charCodeAt(d / 2 + 1) >> 8 :0/0) :(t = 255 & r.charCodeAt((d - 1) / 2), 
      (d + 1) / 2 < r.length ? (o = r.charCodeAt((d + 1) / 2) >> 8, a = 255 & r.charCodeAt((d + 1) / 2)) :o = a = 0/0), 
      d += 3, n = t >> 2, c = (3 & t) << 4 | o >> 4, h = (15 & o) << 2 | a >> 6, f = 63 & a, 
      isNaN(o) ? h = f = 64 :isNaN(a) && (f = 64), i = i + e._.charAt(n) + e._.charAt(c) + e._.charAt(h) + e._.charAt(f);
      return i;
    },
    compress:function(r) {
      if (null == r) return "";
      for (var t, o, a = {}, n = {}, c = "", h = "", f = "", i = 2, d = 3, u = 2, s = "", l = 0, p = 0, A = e._f, C = 0; C < r.length; C += 1) if (c = r.charAt(C), 
      Object.prototype.hasOwnProperty.call(a, c) || (a[c] = d++, n[c] = !0), h = f + c, 
      Object.prototype.hasOwnProperty.call(a, h)) f = h; else {
        if (Object.prototype.hasOwnProperty.call(n, f)) {
          if (256 > f.charCodeAt(0)) {
            for (t = 0; u > t; t++) l <<= 1, 15 == p ? (p = 0, s += A(l), l = 0) :p++;
            for (o = f.charCodeAt(0), t = 0; 8 > t; t++) l = l << 1 | 1 & o, 15 == p ? (p = 0, 
            s += A(l), l = 0) :p++, o >>= 1;
          } else {
            for (o = 1, t = 0; u > t; t++) l = l << 1 | o, 15 == p ? (p = 0, s += A(l), l = 0) :p++, 
            o = 0;
            for (o = f.charCodeAt(0), t = 0; 16 > t; t++) l = l << 1 | 1 & o, 15 == p ? (p = 0, 
            s += A(l), l = 0) :p++, o >>= 1;
          }
          i--, 0 == i && (i = Math.pow(2, u), u++), delete n[f];
        } else for (o = a[f], t = 0; u > t; t++) l = l << 1 | 1 & o, 15 == p ? (p = 0, s += A(l), 
        l = 0) :p++, o >>= 1;
        i--, 0 == i && (i = Math.pow(2, u), u++), a[h] = d++, f = c + "";
      }
      if ("" !== f) {
        if (Object.prototype.hasOwnProperty.call(n, f)) {
          if (256 > f.charCodeAt(0)) {
            for (t = 0; u > t; t++) l <<= 1, 15 == p ? (p = 0, s += A(l), l = 0) :p++;
            for (o = f.charCodeAt(0), t = 0; 8 > t; t++) l = l << 1 | 1 & o, 15 == p ? (p = 0, 
            s += A(l), l = 0) :p++, o >>= 1;
          } else {
            for (o = 1, t = 0; u > t; t++) l = l << 1 | o, 15 == p ? (p = 0, s += A(l), l = 0) :p++, 
            o = 0;
            for (o = f.charCodeAt(0), t = 0; 16 > t; t++) l = l << 1 | 1 & o, 15 == p ? (p = 0, 
            s += A(l), l = 0) :p++, o >>= 1;
          }
          i--, 0 == i && (i = Math.pow(2, u), u++), delete n[f];
        } else for (o = a[f], t = 0; u > t; t++) l = l << 1 | 1 & o, 15 == p ? (p = 0, s += A(l), 
        l = 0) :p++, o >>= 1;
        i--, 0 == i && (Math.pow(2, u), u++);
      }
      for (o = 2, t = 0; u > t; t++) l = l << 1 | 1 & o, 15 == p ? (p = 0, s += A(l), 
      l = 0) :p++, o >>= 1;
      for (;;) {
        if (l <<= 1, 15 == p) {
          s += A(l);
          break;
        }
        p++;
      }
      return s;
    }
  };
  return r = e.pak(r), "eval(function(r){var h,A,d,i,s,u,t='WHAK+com/PaCker=BDEFGIJLMNOQRSTUVXYZbdfghijlnpqstuvwxyz0123456789',e=Math.pow,a='charCodeAt',o='indexOf',c=String.fromCharCode,n='charAt',W=32768,f=64,p='',M=0,l=0,V=c;for(r=r.replace(/[^A-Za-z0-9+/=]/g,'');l<r.length;)A=t[o](r[n](l++)),d=t[o](r[n](l++)),s=t[o](r[n](l++)),u=t[o](r[n](l++)),A=A<<2|d>>4,d=(15&d)<<4|s>>2,i=(3&s)<<6|u,0==M%2?(h=A<<8,f!=s&&(p+=V(h|d)),f!=u&&(h=i<<8)):(p+=V(h|A),f!=s&&(h=d<<8),f!=u&&(p+=V(h|i))),M+=3;return function(r){for(var t,o,f,h,A,d=[],i=4,s=4,u=3,p='',M='',l=c,V=r[a](0),x=W,C=1,M=0;3>M;M+=1)d[M]=M;for(p=0,f=e(2,2),h=1;h!=f;)o=V&x,x>>=1,0==x&&(x=W,V=r[a](C++)),p|=(o>0?1:0)*h,h<<=1;switch(p){case 0:for(p=0,f=e(2,8),h=1;h!=f;)o=V&x,x>>=1,0==x&&(x=W,V=r[a](C++)),p|=(o>0?1:0)*h,h<<=1;A=l(p);break;case 1:for(p=0,f=e(2,16),h=1;h!=f;)o=V&x,x>>=1,0==x&&(x=W,V=r[a](C++)),p|=(o>0?1:0)*h,h<<=1;A=l(p);break;case 2:return''}for(t=M=d[3]=A;;){for(p=0,f=e(2,u),h=1;h!=f;)o=V&x,x>>=1,0==x&&(x=W,V=r[a](C++)),p|=(o>0?1:0)*h,h<<=1;switch(A=p){case 0:for(p=0,f=e(2,8),h=1;h!=f;)o=V&x,x>>=1,0==x&&(x=W,V=r[a](C++)),p|=(o>0?1:0)*h,h<<=1;d[s++]=l(p),A=s-1,i--;break;case 1:for(p=0,f=e(2,16),h=1;h!=f;)o=V&x,x>>=1,0==x&&(x=W,V=r[a](C++)),p|=(o>0?1:0)*h,h<<=1;d[s++]=l(p),A=s-1,i--;break;case 2:return M}0==i&&(i=e(2,u),u++),p=d[A]?d[A]:t+t[n](0),M+=p,d[s++]=t+p[n](0),i--,t=p,0==i&&(i=e(2,u),u++)}}(p)}('" + r + "'));";
}
//USAGE:

//packed=lzwhak('alert("WHAK.com");'));
//alert(packed)
//eval(packed)
