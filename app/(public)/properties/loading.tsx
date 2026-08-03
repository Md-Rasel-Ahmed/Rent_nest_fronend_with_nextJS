export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '200px' 
    }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        ⏳ Data loading, please wait...
      </p>
    </div>
  );
}