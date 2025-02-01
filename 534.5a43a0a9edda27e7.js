"use strict";(self.webpackChunkinterface=self.webpackChunkinterface||[]).push([[534],{98534:(x,b,s)=>{s.r(b),s.d(b,{W3mModal:()=>n});var w=s(73308),c=s(19819),h=s(94515),v=s(8562),g=s(44172),t=s(91508),u=s(56250);const y=c.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var l=function(p,e,o,i){var d,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(p,e,o,i);else for(var m=p.length-1;m>=0;m--)(d=p[m])&&(a=(r<3?d(a):r>3?d(e,o,a):d(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};const f="scroll-lock";let n=class extends c.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.enableEmbedded=t.Hd.state.enableEmbedded,this.open=t.W3.state.open,this.caipAddress=t.WB.state.activeCaipAddress,this.caipNetwork=t.WB.state.activeCaipNetwork,this.shake=t.W3.state.shake,this.initializeTheming(),t.Np.prefetch(),this.unsubscribe.push(t.W3.subscribeKey("open",e=>e?this.onOpen():this.onClose()),t.W3.subscribeKey("shake",e=>this.shake=e),t.WB.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),t.WB.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),t.Hd.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e)),t.En.sendEvent({type:"track",event:"MODAL_LOADED"})}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded)return void t.W3.close();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?c.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?c.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return c.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,v.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}onOverlayClick(e){var o=this;return(0,w.A)(function*(){e.target===e.currentTarget&&(yield o.handleClose())})()}handleClose(){return(0,w.A)(function*(){"UnsupportedChain"===t.IN.state.view||(yield t.UG.isSIWXCloseDisabled())?t.W3.shake():t.W3.close()})()}initializeTheming(){const{themeVariables:e,themeMode:o}=t.Wn.state,i=u.UiHelperUtil.getColorTheme(o);(0,u.initializeTheming)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),t.Pt.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=f,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${f}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",o=>{if("Escape"===o.key)this.handleClose();else if("Tab"===o.key){const{tagName:i}=o.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAddress(e){var o=this;return(0,w.A)(function*(){const i=t.WB.state.isSwitchingNamespace,r=t.wE.getPlainAddress(e);r||i?i&&r&&t.IN.goBack():t.W3.close(),yield t.UG.initializeIfEnabled(),o.caipAddress=e,t.WB.setIsSwitchingNamespace(!1)})()}onNewNetwork(e){t.Np.prefetch();const o=this.caipNetwork?.caipNetworkId?.toString(),i=e?.caipNetworkId?.toString(),a=t.WB.state.isSwitchingNamespace;!("ConnectingExternal"===t.IN.state.view)&&(!this.caipAddress||"UnsupportedChain"===t.IN.state.view||o&&i&&o!==i&&!(this.caipNetwork?.name===g.oU.UNSUPPORTED_NETWORK_NAME)&&!a)&&t.IN.goBack(),this.caipNetwork=e}};n.styles=y,l([(0,h.MZ)({type:Boolean})],n.prototype,"enableEmbedded",void 0),l([(0,h.wk)()],n.prototype,"open",void 0),l([(0,h.wk)()],n.prototype,"caipAddress",void 0),l([(0,h.wk)()],n.prototype,"caipNetwork",void 0),l([(0,h.wk)()],n.prototype,"shake",void 0),n=l([(0,u.customElement)("w3m-modal")],n)}}]);