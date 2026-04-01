import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Radio, InputNumber, Button, message, Card } from 'antd';
import { SendOutlined, HeartFilled, UserOutlined, MessageOutlined, TeamOutlined } from '@ant-design/icons';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';

const { TextArea } = Input;

export default function RSVP() {
  const { ref, isInView } = useScrollReveal();
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('');
  const [guests, setGuests] = useState(1);
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !attending) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    message.success('Gửi xác nhận thành công!');
  };

  return (
    <section id="rsvp" className="py-20 md:py-28 px-4">
      <div className="max-w-lg mx-auto">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Xác Nhận Tham Dự
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="section-subtitle"
          >
            Sự hiện diện của bạn là niềm vinh hạnh của chúng mình
          </motion.p>
          <div className="gold-divider" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          {submitted ? (
            <Card
              style={{
                borderRadius: 20,
                border: '1px solid #fce4ec',
                boxShadow: '0 4px 24px rgba(183,110,121,0.08)',
                textAlign: 'center',
                padding: '24px 0',
              }}
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)' }}>
                <HeartFilled style={{ fontSize: 32, color: '#b76e79' }} />
              </div>
              <h3 className="font-serif text-3xl text-warm-gray-dark mb-3">Cảm Ơn Bạn!</h3>
              <p className="text-warm-gray-light leading-relaxed text-base px-4">
                Chúng mình đã nhận được phản hồi của bạn.<br />
                Rất mong được gặp bạn trong ngày vui!
              </p>
              <Button
                type="link"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setAttending('');
                  setGuests(1);
                  setMsg('');
                }}
                style={{ color: '#b76e79', marginTop: 20, fontSize: 14 }}
              >
                Gửi phản hồi khác
              </Button>
            </Card>
          ) : (
            <Card
              style={{
                borderRadius: 20,
                border: '1px solid #fce4ec',
                boxShadow: '0 4px 24px rgba(183,110,121,0.08)',
              }}
              styles={{ body: { padding: '32px 28px' } }}
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-medium text-warm-gray-dark mb-2">
                    <UserOutlined style={{ color: '#b76e79' }} />
                    Họ và Tên <span className="text-rose-400">*</span>
                  </label>
                  <Input
                    size="large"
                    placeholder="Nhập họ và tên của bạn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ borderRadius: 12, borderColor: '#f0d0d5', height: 48 }}
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-medium text-warm-gray-dark mb-3">
                    <HeartFilled style={{ color: '#b76e79' }} />
                    Bạn có tham dự không? <span className="text-rose-400">*</span>
                  </label>
                  <Radio.Group
                    value={attending}
                    onChange={(e) => setAttending(e.target.value)}
                    size="large"
                    style={{ width: '100%', display: 'flex', gap: 12 }}
                  >
                    <Radio.Button
                      value="yes"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        borderRadius: 12,
                        height: 48,
                        lineHeight: '46px',
                        borderColor: attending === 'yes' ? '#b76e79' : '#f0d0d5',
                        fontWeight: 500,
                      }}
                    >
                      Vui vẻ nhận lời
                    </Radio.Button>
                    <Radio.Button
                      value="no"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        borderRadius: 12,
                        height: 48,
                        lineHeight: '46px',
                        borderColor: attending === 'no' ? '#b76e79' : '#f0d0d5',
                        fontWeight: 500,
                      }}
                    >
                      Xin phép vắng mặt
                    </Radio.Button>
                  </Radio.Group>
                </div>

                {/* Guests */}
                {attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label className="flex items-center gap-1.5 text-sm font-medium text-warm-gray-dark mb-2">
                      <TeamOutlined style={{ color: '#b76e79' }} />
                      Số lượng khách
                    </label>
                    <InputNumber
                      min={1}
                      max={10}
                      value={guests}
                      onChange={(v) => setGuests(v ?? 1)}
                      size="large"
                      style={{ width: '100%', borderRadius: 12, borderColor: '#f0d0d5' }}
                      addonAfter="người"
                    />
                  </motion.div>
                )}

                {/* Message */}
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-medium text-warm-gray-dark mb-2">
                    <MessageOutlined style={{ color: '#b76e79' }} />
                    Lời chúc đến cô dâu chú rể
                  </label>
                  <TextArea
                    rows={4}
                    placeholder="Viết lời chúc phúc cho cô dâu chú rể..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    style={{ borderRadius: 12, resize: 'none', borderColor: '#f0d0d5' }}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  size="large"
                  block
                  loading={loading}
                  disabled={!name || !attending}
                  onClick={handleSubmit}
                  style={{
                    borderRadius: 12,
                    height: 52,
                    fontWeight: 600,
                    fontSize: 16,
                    background: loading || (!name || !attending) ? undefined : 'linear-gradient(135deg, #b76e79, #d4a0a7)',
                    border: 'none',
                    boxShadow: '0 4px 16px rgba(183,110,121,0.25)',
                  }}
                >
                  Gửi Xác Nhận
                </Button>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
}
