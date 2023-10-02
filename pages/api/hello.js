// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Welcome to GDSC Jadavpur University' })
}
