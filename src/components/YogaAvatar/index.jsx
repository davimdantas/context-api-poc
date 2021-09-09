const { Box, Avatar } = require('@gympass/yoga');

export default function YogaAvatar({ src, alt, icon, fill, stroke }) {
  return (
    <Box display="flex" justifyContent="space-evenly" width="100%">
      <Avatar src={src} alt={alt} icon={icon} fill={fill} stroke={stroke} />
    </Box>
  );
}
