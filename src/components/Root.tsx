import { Outlet, NavLink, useNavigate, useLocation } from "react-router"
import { useState } from "react"


export default function Root() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchVal, setSearchVal] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const catParam = new URLSearchParams(location.search).get("cat")

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && searchVal.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchVal.trim())}`)
      setSearchOpen(false)
      setSearchVal("")
    }
    if (e.key === "Escape") {
      setSearchOpen(false)
      setSearchVal("")
    }
  }

  const linkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
    fontSize: "14px",
    fontWeight: isActive ? 600 : 400,
    color: isActive ? "#f0ede6" : "#7a7a8c",
    textDecoration: "none",
    borderBottom: isActive ? "2px solid #336BF4" : "2px solid transparent",
    paddingBottom: "2px",
    transition: "color 0.15s",
    whiteSpace: "nowrap",
  })

  return (
    <div style={{ minHeight: "100vh", background: "#000000" }}>
      <header style={{
        borderBottom: "1px solid #222222",
        padding: "0 clamp(16px, 4vw, 64px)",
        height: "56px",
        display: "flex",
        alignItems: "center",
        gap: "clamp(16px, 3vw, 36px)",
        position: "sticky",
        top: 0,
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <div style={{
            borderStyle: "none",
            borderColor: "rgba(0,0,0,0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "36px",
            padding: "2px 4px",
          }}>
            <div style={{ width: "40px", height: "36px", overflow: "hidden", display: "flex", alignItems: "center" }}>
              <svg width="61" height="55" viewBox="0 0 61 55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "40px", height: "auto", flexShrink: 0 }}>
                <path d="M41.2809 50.9732L40.4847 51.2853L35.4759 53.2415L34.855 51.6492L40.66 49.3826L41.2809 50.9732ZM55.5113 45.4152L49.7063 47.6818L49.0854 46.0912L49.8816 45.7791L54.8904 43.8229L55.5113 45.4152Z" fill="white"/>
                <path d="M16.6524 44.3966C16.4194 44.2311 16.2399 43.9837 16.114 43.6543L13.8926 37.8414C13.7741 37.5313 13.7476 37.2303 13.813 36.9378L18.1108 17.7258C18.179 17.4211 18.3397 17.3587 18.593 17.5384L24.1551 21.4854C24.4083 21.6652 24.5009 21.9074 24.4327 22.2122L21.059 37.293L22.3355 38.1989L25.7091 23.1181C25.7773 22.8133 25.9382 22.7509 26.1913 22.9307L31.7533 26.8779C32.0065 27.0577 32.0991 27.2998 32.0309 27.6043L28.6573 42.6851L29.934 43.5911L33.3076 28.5102C33.3755 28.2057 33.5364 28.1431 33.7896 28.3228L39.3516 32.27C39.6051 32.4498 39.6974 32.692 39.6294 32.9968L35.3316 52.2087C35.266 52.5012 35.1304 52.6874 34.9249 52.7673L31.0675 54.2662C30.8489 54.3514 30.6233 54.311 30.3901 54.1455L27.047 51.773C26.8037 51.6005 26.6243 51.3531 26.5087 51.031L24.6272 46.1372L23.9283 45.6412L20.673 46.8897C20.4646 46.982 20.2388 46.9415 19.9957 46.7691L16.6524 44.3966Z" fill="rgb(255,255,255)"/>
                <path d="M0.526416 32.9456C0.273141 32.7659 0.180577 32.5237 0.248723 32.2192L5.49525 8.76623C5.56342 8.46158 5.72413 8.39912 5.97741 8.57887L16.5543 16.0849C16.8076 16.2647 16.9002 16.5069 16.832 16.8115L15.4007 23.2095C15.3326 23.514 15.1719 23.5764 14.9186 23.3969L10.2836 20.1075L9.94421 21.6246L14.5792 24.9139C14.8325 25.0937 14.925 25.3358 14.8569 25.6406L13.5606 31.4354C13.4924 31.7399 13.3317 31.8023 13.0784 31.6228L8.44343 28.3335L6.57054 36.7054C6.5024 37.0102 6.34169 37.0726 6.08841 36.8928L0.526416 32.9456Z" fill="rgb(255,255,255)"/>
                <path d="M37.2286 36.3583C36.9955 36.1929 36.816 35.9454 36.6903 35.616L34.4688 29.8031C34.3503 29.4933 34.3236 29.1921 34.3893 28.8996L38.687 9.68758C38.7553 9.3829 38.9158 9.32045 39.169 9.50019L44.731 13.4473C44.9845 13.6271 45.0771 13.8693 45.0089 14.1739L41.6353 29.2547L42.9117 30.1606L46.2853 15.0798C46.3535 14.7752 46.5141 14.7127 46.7676 14.8925L52.3296 18.8396C52.5827 19.0194 52.6754 19.2616 52.6071 19.5662L49.2335 34.6469L50.5099 35.5528L53.8838 20.4721C53.9518 20.1675 54.1126 20.105 54.3658 20.2847L59.9278 24.2318C60.181 24.4116 60.2736 24.6537 60.2057 24.9585L55.9076 44.1704C55.8422 44.4629 55.7066 44.6491 55.5011 44.7291L51.6437 46.2282C51.4251 46.3131 51.1995 46.2727 50.9664 46.1076L47.6232 43.735C47.3799 43.5623 47.2005 43.3149 47.0849 42.9928L45.2034 38.0993L44.5046 37.603L41.2491 38.8515C41.0409 38.9437 40.815 38.9033 40.5717 38.7308L37.2286 36.3583Z" fill="white"/>
                <path d="M21.1043 24.9074C20.851 24.7279 20.7585 24.4854 20.8266 24.1809L26.0733 0.728051C26.1412 0.423366 26.3021 0.360912 26.5553 0.540661L37.1322 8.0467C37.3854 8.22645 37.478 8.46865 37.4098 8.77331L35.9787 15.1712C35.9104 15.4759 35.7499 15.5383 35.4964 15.3586L30.8615 12.0693L30.5221 13.5865L35.157 16.8758C35.4104 17.0555 35.5031 17.2977 35.4348 17.6024L34.1384 23.3971C34.0702 23.7016 33.9096 23.7643 33.6564 23.5845L29.0212 20.2952L27.1484 28.6672C27.0802 28.972 26.9197 29.0344 26.6662 28.8546L21.1043 24.9074Z" fill="white"/>
                <path d="M11.9923 7.15027L11.1962 7.46238L6.1873 9.41852L5.56641 7.82624L11.3714 5.55965L11.9923 7.15027ZM26.2227 1.59229L20.4177 3.85887L19.7968 2.26826L20.593 1.95614L25.6018 0L26.2227 1.59229Z" fill="white"/>
                <path d="M6.60115 31.1163L5.80166 31.4218L0.610877 33.4113L0 31.8157L5.9886 29.5207L6.60115 31.1163ZM21.3757 25.4565L15.3871 27.7515L14.7745 26.1542L20.7648 23.8609L21.3757 25.4565Z" fill="white"/>
              </svg>
            </div>
          </div>
          <span style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            color: "#f0ede6",
            letterSpacing: "-0.01em",
          }}>
            字体档案
          </span>
        </NavLink>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "clamp(12px, 2.5vw, 28px)", alignItems: "center" }}>
          {[
            { to: "/catalog", label: "目录", active: location.pathname === "/catalog" && !catParam },
            { to: "/catalog?cat=game", label: "电子游戏", active: location.pathname === "/catalog" && catParam === "game" },
            { to: "/catalog?cat=film", label: "影视动漫", active: location.pathname === "/catalog" && catParam === "film" },
          ].map(({ to, label, active }) => (
            <NavLink key={to} to={to} style={linkStyle({ isActive: active })}>{label}</NavLink>
          ))}
        </nav>

        {/* Right */}
        <div style={{ marginLeft: "auto", display: "flex", gap: "20px", alignItems: "center" }}>
          {searchOpen ? (
            <input
              autoFocus
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={handleSearch}
              onBlur={() => { if (!searchVal) setSearchOpen(false) }}
              placeholder="搜索作品、字体… 回车确认"
              style={{
                background: "#161616",
                border: "1px solid #222222",
                borderRadius: "2px",
                padding: "5px 10px",
                color: "#f0ede6",
                fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
                fontSize: "13px",
                outline: "none",
                width: "200px",
              }}
            />
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              title="搜索"
              style={{ background: "none", border: "none", color: "#7a7a8c", cursor: "pointer", fontSize: "30px", padding: 0, lineHeight: "20px", fontWeight: 100 }}
            >
              ⌕
            </button>
          )}
          <NavLink to="/submit" style={linkStyle}>提交</NavLink>
          <NavLink to="/about" style={linkStyle}>关于</NavLink>
        </div>
      </header>

      <Outlet />

      <footer style={{
        borderTop: "1px solid #222222",
        padding: "28px clamp(16px, 4vw, 64px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "auto",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#7a7a8c", letterSpacing: "0.05em" }}>
          字体档案 © 2026 — 所有字体仅供学习参考
        </span>
        <div style={{ display: "flex", gap: "20px" }}>
          {[["关于", "/about"], ["提交收录", "/submit"], ["目录", "/catalog"]].map(([label, href]) => (
            <NavLink key={href} to={href} style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#222222", textDecoration: "none" }}>
              {label}
            </NavLink>
          ))}
        </div>
      </footer>
    </div>
  )
}
