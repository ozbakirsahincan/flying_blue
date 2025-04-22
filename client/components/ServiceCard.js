import { Card, CardContent, Typography } from '@mui/material';

export default function ServiceCard({ service }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{service.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
        <Typography variant="body2"><strong>Kod:</strong> {service.serviceCode}</Typography>
        <Typography variant="body2"><strong>Durum:</strong> {service.isActive ? 'Aktif' : 'Pasif'}</Typography>
      </CardContent>
    </Card>
  );
}