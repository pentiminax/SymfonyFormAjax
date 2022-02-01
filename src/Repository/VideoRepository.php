<?php

namespace App\Repository;

use App\Entity\Video;
use App\Entity\Visibility;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Video|null find($id, $lockMode = null, $lockVersion = null)
 * @method Video|null findOneBy(array $criteria, array $orderBy = null)
 * @method Video[]    findAll()
 * @method Video[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VideoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Video::class);
    }

    public function new(): Video
    {
        $video = new Video();

        $visibility = $this->getEntityManager()->find(Visibility::class, Visibility::PUBLIC);
        $video->setVisibility($visibility);

        return $video;
    }
}
