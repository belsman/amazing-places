export function getPreviewMapLocation(lat: number, lng: number) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&
markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyDK-UtDiDBnXwQlLHR_pWyODqZdCH6nu70`;
}
