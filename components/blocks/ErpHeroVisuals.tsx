/* Hero diagrams for the three ERP pages. Ported from the reference HTML SVGs;
 * the animated dashes (`erp-flow`) and staggered app tiles (`erp-app-tile`)
 * are driven by keyframes in globals.css. */

const MONO = 'var(--keyob-sans)';

/** Business processes → ERP core (fed by two platforms) → operating layer. */
export function ErpHubVisual() {
  const inbound = ['SALES ORDER', 'INVENTORY', 'PURCHASING', 'FINANCE', 'REPORTING'];
  return (
    <svg viewBox="0 0 460 350" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="erpCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--keyob-cyan)" />
          <stop offset="1" stopColor="var(--keyob-blue)" />
        </linearGradient>
      </defs>

      <g fontFamily={MONO} fontSize="9.5" letterSpacing="0.08em" fill="rgba(245,248,250,.78)">
        {inbound.map((label, i) => (
          <text key={label} x="14" y={46 + i * 60}>
            {label}
          </text>
        ))}
      </g>

      <g className="erp-flow" stroke="rgba(25,198,232,.5)" strokeWidth="1.3" fill="none">
        <path d="M108 42 C 158 42 172 168 208 168" />
        <path d="M108 102 C 158 102 178 168 208 168" />
        <path d="M108 162 L 208 168" />
        <path d="M108 222 C 158 222 178 168 208 168" />
        <path d="M108 282 C 158 282 172 168 208 168" />
      </g>

      <rect
        x="208"
        y="134"
        width="98"
        height="68"
        rx="14"
        fill="rgba(25,198,232,.10)"
        stroke="url(#erpCore)"
        strokeWidth="1.9"
      />
      <text x="257" y="163" textAnchor="middle" fontFamily={MONO} fontSize="11" letterSpacing="0.1em" fill="#fff">
        ERP
      </text>
      <text
        x="257"
        y="181"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="9"
        letterSpacing="0.1em"
        fill="rgba(245,248,250,.6)"
      >
        CORE
      </text>

      <g fontFamily={MONO} fontSize="9" letterSpacing="0.08em">
        <rect
          x="196"
          y="70"
          width="122"
          height="28"
          rx="8"
          fill="rgba(240,171,0,.10)"
          stroke="rgba(240,171,0,.5)"
        />
        <text x="257" y="88" textAnchor="middle" fill="var(--erp-sap-gold)">
          SAP BUSINESS ONE
        </text>
        <rect
          x="196"
          y="238"
          width="122"
          height="28"
          rx="8"
          fill="rgba(168,122,181,.12)"
          stroke="rgba(168,122,181,.55)"
        />
        <text x="257" y="256" textAnchor="middle" fill="var(--erp-odoo-soft)">
          ODOO
        </text>
      </g>
      <path className="erp-flow" d="M257 98 L 257 134" stroke="rgba(240,171,0,.55)" strokeWidth="1.3" fill="none" />
      <path className="erp-flow" d="M257 238 L 257 202" stroke="rgba(168,122,181,.6)" strokeWidth="1.3" fill="none" />

      <path className="erp-flow" d="M306 168 L 356 168" stroke="var(--keyob-blue)" strokeWidth="1.5" fill="none" />
      <rect
        x="356"
        y="126"
        width="86"
        height="84"
        rx="10"
        fill="rgba(37,99,217,.14)"
        stroke="rgba(37,99,217,.55)"
        strokeWidth="1.4"
      />
      <g fontFamily={MONO} fontSize="9" letterSpacing="0.08em" fill="#8fb4f5" textAnchor="middle">
        <text x="399" y="158">
          CRM · WEB
        </text>
        <text x="399" y="173">
          DATA · AI
        </text>
        <text x="399" y="188">
          AUTOMATION
        </text>
      </g>
    </svg>
  );
}

/** Five functional areas converging on one integrated SAP B1 core. */
export function SapHeroVisual() {
  const blocks = ['FINANCIALS', 'SALES · CRM', 'PURCHASING', 'INVENTORY', 'REPORTING'];
  return (
    <svg viewBox="0 0 440 340" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sapCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--keyob-cyan)" />
          <stop offset="1" stopColor="var(--erp-sap-gold)" />
        </linearGradient>
      </defs>

      <g fontFamily={MONO} fontSize="9.5" letterSpacing="0.08em" fill="rgba(245,248,250,.8)">
        {blocks.map((label, i) => (
          <g key={label}>
            <rect
              x="12"
              y={24 + i * 56}
              width="106"
              height="34"
              rx="8"
              fill="rgba(245,248,250,.06)"
              stroke="rgba(245,248,250,.26)"
            />
            <text x="65" y={45 + i * 56} textAnchor="middle">
              {label}
            </text>
          </g>
        ))}
      </g>

      <g className="erp-flow" stroke="rgba(240,171,0,.5)" strokeWidth="1.3" fill="none">
        <path d="M118 41 C 164 41 178 153 212 153" />
        <path d="M118 97 C 164 97 184 153 212 153" />
        <path d="M118 153 L 212 153" />
        <path d="M118 209 C 164 209 184 153 212 153" />
        <path d="M118 265 C 164 265 178 153 212 153" />
      </g>

      <rect
        x="212"
        y="122"
        width="96"
        height="62"
        rx="13"
        fill="rgba(240,171,0,.10)"
        stroke="url(#sapCore)"
        strokeWidth="1.9"
      />
      <text x="260" y="147" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.1em" fill="#fff">
        SAP B1
      </text>
      <text
        x="260"
        y="165"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="8.5"
        letterSpacing="0.1em"
        fill="rgba(245,248,250,.6)"
      >
        SINGLE CORE
      </text>

      <path className="erp-flow" d="M308 153 L 352 153" stroke="var(--erp-sap-gold)" strokeWidth="1.5" fill="none" />
      <rect
        x="352"
        y="114"
        width="80"
        height="78"
        rx="10"
        fill="rgba(240,171,0,.10)"
        stroke="rgba(240,171,0,.5)"
        strokeWidth="1.4"
      />
      <g fontFamily={MONO} fontSize="8.5" letterSpacing="0.08em" fill="var(--erp-sap-gold)" textAnchor="middle">
        <text x="392" y="145">
          WEB · DATA
        </text>
        <text x="392" y="160">
          AI · AUTO
        </text>
      </g>
    </svg>
  );
}

/** Modular app tiles (two dashed = "add later") converging on one database. */
export function OdooHeroVisual() {
  const tiles: Array<{ label: string; x: number; y: number; optional?: boolean }> = [
    { label: 'CRM', x: 14, y: 26 },
    { label: 'SALES', x: 98, y: 26 },
    { label: 'ACCOUNTS', x: 14, y: 70 },
    { label: 'INVENTORY', x: 98, y: 70 },
    { label: 'MRP', x: 14, y: 114 },
    { label: 'PROJECT', x: 98, y: 114 },
    { label: '+ HR', x: 14, y: 158, optional: true },
    { label: '+ WEBSITE', x: 98, y: 158, optional: true },
  ];

  return (
    <svg viewBox="0 0 440 340" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="odooCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--keyob-cyan)" />
          <stop offset="1" stopColor="var(--erp-odoo-soft)" />
        </linearGradient>
      </defs>

      <g fontFamily={MONO} fontSize="8.5" letterSpacing="0.08em" fill="rgba(245,248,250,.8)">
        {tiles.map((t, i) => (
          <g key={t.label} className="erp-app-tile" style={{ ['--d' as string]: `${i * 0.3}s` }}>
            <rect
              x={t.x}
              y={t.y}
              width="74"
              height="34"
              rx="8"
              fill={t.optional ? 'rgba(245,248,250,.05)' : 'rgba(168,122,181,.14)'}
              stroke={t.optional ? 'rgba(245,248,250,.22)' : 'rgba(168,122,181,.5)'}
              strokeDasharray={t.optional ? '4 4' : undefined}
            />
            <text x={t.x + 37} y={t.y + 21} textAnchor="middle">
              {t.label}
            </text>
          </g>
        ))}
      </g>
      <text
        x="93"
        y="216"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="8.5"
        letterSpacing="0.1em"
        fill="rgba(245,248,250,.4)"
      >
        ADD APPS AS YOU GROW
      </text>

      <g stroke="rgba(168,122,181,.45)" strokeWidth="1.2" fill="none" strokeDasharray="4 4">
        <path d="M172 43 C 210 43 214 150 236 150" />
        <path d="M172 87 C 210 87 218 150 236 150" />
        <path d="M172 131 C 210 131 220 150 236 150" />
        <path d="M172 175 C 210 175 218 150 236 150" />
      </g>

      <rect
        x="236"
        y="120"
        width="92"
        height="60"
        rx="13"
        fill="rgba(168,122,181,.12)"
        stroke="url(#odooCore)"
        strokeWidth="1.9"
      />
      <text x="282" y="145" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.1em" fill="#fff">
        ODOO
      </text>
      <text
        x="282"
        y="163"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="8"
        letterSpacing="0.1em"
        fill="rgba(245,248,250,.6)"
      >
        ONE DATABASE
      </text>

      <path
        d="M328 150 L 360 150"
        stroke="var(--erp-odoo-soft)"
        strokeWidth="1.4"
        fill="none"
        strokeDasharray="4 4"
      />
      <rect
        x="360"
        y="116"
        width="70"
        height="68"
        rx="10"
        fill="rgba(168,122,181,.10)"
        stroke="rgba(168,122,181,.5)"
        strokeWidth="1.3"
      />
      <g fontFamily={MONO} fontSize="8" letterSpacing="0.08em" fill="var(--erp-odoo-soft)" textAnchor="middle">
        <text x="395" y="144">
          WEB · DATA
        </text>
        <text x="395" y="158">
          AI · AUTO
        </text>
      </g>
    </svg>
  );
}
