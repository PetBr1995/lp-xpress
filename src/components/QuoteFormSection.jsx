import { useEffect, useMemo, useState } from 'react'

/**
 * ⚠️ CHAVES FAKE — APENAS EXEMPLO DIDÁTICO
 * NÃO USAR EM PRODUÇÃO
 */
const RD_CLIENT_ID = '9f630d53-f053-4a1e-b933-02b395254e04'
const RD_CLIENT_SECRET = '3e5506d29c6c4b2ca94bd7e8986291ce'

/**
 * Endpoint do seu backend/proxy
 * (é ele que, no mundo real, usaria as chaves acima)
 */
const API_URL = '/api/lead'

function onlyDigits(v = '') {
  return v.replace(/\D/g, '')
}

function isValidEmail(email = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

// Converte para padrão +55XXXXXXXXXXX
function formatWhatsappE164(numero = '') {
  const n = onlyDigits(numero)
  if (!n) return ''
  if (n.startsWith('55')) return `+${n}`
  return `+55${n}`
}

function QuoteFormSection({ id = 'orcamento', variant = 'dark', title }) {
  const transparent = variant === 'transparent'
  const [sourceData, setSourceData] = useState({
    page_url: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setSourceData({
      page_url: window.location.href,
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
    })
  }, [])

  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    category: '',
    description: '',
  })

  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleWhatsappMask = (e) => {
    let value = e.target.value
    value = onlyDigits(value)

    if (value.length === 0) {
      setForm((prev) => ({ ...prev, whatsapp: '' }))
      return
    }

    value = value.slice(0, 11)

    if (value.length <= 2) value = `(${value}`
    else if (value.length <= 6) value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2')
    else {
      if (value.length <= 10) value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
      else value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
    }

    setForm((prev) => ({ ...prev, whatsapp: value }))
  }

  const errors = useMemo(() => {
    const e = {}
    if (!form.name.trim()) e.name = 'Informe seu nome.'
    if (!isValidEmail(form.email)) e.email = 'Informe um e-mail válido.'

    const phone = onlyDigits(form.whatsapp)
    if (!(phone.length === 10 || phone.length === 11)) e.whatsapp = 'Informe um WhatsApp com DDD.'

    if (!form.category.trim()) e.category = 'Selecione uma categoria.'
    if (!form.description.trim()) e.description = 'Descreva seu pedido.'
    return e
  }, [form])

  const canSubmit = status !== 'loading'
  const canNavigate = typeof window !== 'undefined'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    if (!canSubmit || Object.keys(errors).length > 0) {
      setStatus('error')
      setMessage('Revise os campos e tente novamente.')
      return
    }

    setStatus('loading')

    const payload = {
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: {
        conversion_identifier: 'Orcamento - Grafica Xpress',
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        personal_phone: formatWhatsappE164(form.whatsapp),
        cf_categoria: form.category.trim(),
        cf_descricao: form.description.trim(),
        traffic_source: sourceData.utm_source,
        traffic_campaign: sourceData.utm_campaign,
        traffic_medium: sourceData.utm_medium,
        traffic_value: sourceData.utm_term,
        cf_utm_campaign: sourceData.utm_campaign,
        cf_utm_medium: sourceData.utm_medium,
        cf_utm_term: sourceData.utm_term,
        cf_utm_content: sourceData.utm_content,
        cf_utm_source: sourceData.utm_source,
        cf_url_de_conversao: sourceData.page_url,
      },
      tags: ['orcamento', 'grafica-xpress'],
      source: 'site-grafica-xpress',
    }

    try {
      const res = await fetch(
        'https://api.rd.services/platform/conversions?api_key=MHnWDjBYARQKdwUsfZRbjtVmPEyoHnSqtgFz',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )

      const data = await res.json().catch(() => ({}))

      if (!res.ok || data.ok === false) {
        setStatus('error')
        setMessage(data.message || 'Não foi possível enviar. Tente novamente.')
        return
      }

      setStatus('success')
      setMessage(data.message || 'Cadastro enviado! Em breve entraremos em contato.')
      setForm({ name: '', email: '', whatsapp: '', category: '', description: '' })
      if (canNavigate) {
        window.location.href = '/agradecimento'
      }
    } catch (err) {
      setStatus('error')
      setMessage('Falha de rede. Verifique sua conexão e tente novamente.')
    }
  }

  return (
    <section id={id} className={`relative py-[44px] text-white max-[920px]:py-10 ${transparent ? 'bg-transparent' : 'bg-[#252a63] pt-[60px] max-[920px]:pt-12'}`} data-reveal="up">
      {!transparent && (
        <div className="absolute -top-[17px] left-1/2 h-[34px] w-[34px] -translate-x-1/2 rotate-45 bg-[#252a63]" />
      )}

      <div className="mx-auto w-full max-w-[860px] px-6 text-center">
        <h2 className="m-0 text-[52px] leading-[1.1] max-[920px]:text-[30px]">
          {title || (
            <>
              Solicite um orçamento e retornaremos
              <br />
              com a melhor solução
            </>
          )}
        </h2>

        <div className="mx-auto mb-6 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />

        <form onSubmit={handleSubmit} className="mt-1 grid grid-cols-2 gap-2 text-left max-[920px]:grid-cols-1 max-[920px]:gap-3">
          <label className="flex flex-col gap-[3px] text-[13px]">
            Nome*
            <input
              type="text"
              className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white max-[920px]:py-2"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              autoComplete="name"
            />
          </label>
          <label className="flex flex-col gap-[3px] text-[13px]">
            E-mail*
            <input
              type="email"
              className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white max-[920px]:py-2"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              autoComplete="email"
            />
          </label>
          <label className="flex flex-col gap-[3px] text-[13px]">
            Contato (WhatsApp)*
            <input
              type="text"
              className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white max-[920px]:py-2"
              value={form.whatsapp}
              onChange={handleWhatsappMask}
              inputMode="tel"
              autoComplete="tel"
            />
          </label>
          <label className="flex flex-col gap-[3px] text-[13px]">
            Selecione a categoria*
            <select
              value={form.category}
              onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
              className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white max-[920px]:py-2"
            >
              <option value="" disabled className="text-[#222]">
                Selecione
              </option>
              <option className="text-[#222]">Comunicação Visual</option>
              <option className="text-[#222]">Confecção</option>
              <option className="text-[#222]">Gráfica Xpress</option>
              <option className="text-[#222]">Brindes Personalizados</option>
              <option className="text-[#222]">Decoração de Eventos</option>
            </select>
          </label>
          <label className="col-span-2 flex flex-col gap-[3px] text-[13px] max-[920px]:col-span-1">
            Descreva seu pedido aqui*
            <textarea
              rows="3"
              className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white max-[920px]:py-2"
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
            />
          </label>
          {(status === 'success' || status === 'error') && (
            <div className="col-span-2 max-[920px]:col-span-1">
              <p className={`text-sm ${status === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                {message}
              </p>
            </div>
          )}
          <button
            type="submit"
            disabled={!canSubmit}
            className="col-span-2 mx-auto mt-2 rounded-[18px] bg-[#f2f2f2] px-[26px] py-2 text-[16px] font-bold text-[#222a67] disabled:cursor-not-allowed disabled:opacity-60 max-[920px]:col-span-1 max-[920px]:w-full"
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default QuoteFormSection
