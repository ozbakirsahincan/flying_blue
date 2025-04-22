import ServiceCard from '@/components/ServiceCard';
import { Typography } from '@mui/material';


export default async function ServicesPage() {
    const res = await fetch('http://localhost:5001/api/services');
    if (!res.ok) throw new Error('API yanıtı başarısız');

    const data = await res.json();
    if (!Array.isArray(data)) throw new Error('Beklenen veri formatı alınamadı');

    return (
        <main>
            <Typography >Servisler</Typography>
            {data.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </main>
    );
}