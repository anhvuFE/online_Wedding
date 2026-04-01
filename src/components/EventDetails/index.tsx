import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Divider } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined, CalendarOutlined, CompassOutlined } from '@ant-design/icons';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import { WEDDING_DATA } from '../../data/wedding-data';

interface VenueCardProps {
  side: typeof WEDDING_DATA.groomSide | typeof WEDDING_DATA.brideSide;
  icon: ReactNode;
  delay: number;
}

function VenueCard({ side, icon, delay }: VenueCardProps) {
  const { ref, isInView } = useScrollReveal(0.2);

  const handleAddToCalendar = () => {
    const dateStr = side.date.replace(/[-:]/g, '').split('T')[0];
    const start = `${dateStr}T100000`;
    const end = `${dateStr}T180000`;
    const title = encodeURIComponent(`${side.title} - ${WEDDING_DATA.groom.firstName} & ${WEDDING_DATA.bride.firstName}`);
    const location = encodeURIComponent(`${side.venue}, ${side.address}`);
    const details = encodeURIComponent('Trân trọng kính mời bạn đến chung vui cùng chúng mình!');
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${location}&details=${details}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Card
        hoverable
        style={{
          borderRadius: 16,
          border: '1px solid #f5e6e8',
          boxShadow: '0 2px 20px rgba(183, 110, 121, 0.06)',
        }}
        styles={{ body: { padding: '32px 28px' } }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-50 flex items-center justify-center text-rose-gold text-2xl">
            {icon}
          </div>
          <h3 className="font-serif text-2xl text-warm-gray-dark mb-1">{side.title}</h3>
          <p className="text-rose-gold font-medium">{side.dayLabel}</p>
        </div>

        <Divider style={{ borderColor: '#f5e6e8', margin: '16px 0' }} />

        {/* Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <EnvironmentOutlined className="text-rose-gold mt-1" />
            <div>
              <p className="font-semibold text-warm-gray-dark">{side.venue}</p>
              <p className="text-warm-gray-light text-sm">{side.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ClockCircleOutlined className="text-rose-gold mt-1" />
            <div>
              <p className="text-xs text-warm-gray-light uppercase tracking-wider mb-0.5">{side.reception.label}</p>
              <p className="font-semibold text-warm-gray-dark">{side.reception.time}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            type="primary"
            icon={<CalendarOutlined />}
            onClick={handleAddToCalendar}
            block
            size="large"
            style={{ borderRadius: 10, height: 44 }}
          >
            Thêm vào Lịch
          </Button>
          <Button
            icon={<CompassOutlined />}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(side.mapQuery)}`}
            target="_blank"
            block
            size="large"
            style={{ borderRadius: 10, height: 44, borderColor: '#b76e79', color: '#b76e79' }}
          >
            Chỉ Đường
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export default function EventDetails() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="events" className="py-20 md:py-28 px-4 bg-blush">
      <div className="max-w-5xl mx-auto">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Sự Kiện Cưới
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="section-subtitle"
          >
            Trân trọng kính mời bạn đến chung vui cùng chúng mình
          </motion.p>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
          <VenueCard
            side={WEDDING_DATA.groomSide}
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            }
            delay={0}
          />
          <VenueCard
            side={WEDDING_DATA.brideSide}
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            }
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
